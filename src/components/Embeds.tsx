import {
    Button,
    ButtonGroup,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import {Add, AddPhotoAlternate, ArrowDropDown, ArrowDropUp, Check, Delete} from '@mui/icons-material';
import {ChangeEvent, ReactElement, useCallback} from 'react';
import useStateStore from '../utils/store-manager.tsx';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';

/**
 * Header row for embeds table.
 * @constructor
 */
function HeaderRow(): ReactElement {
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell />

      <TableCell>File Upload</TableCell>

      <TableCell>URL</TableCell>
      <TableCell>Remove</TableCell>
    </TableRow>
  );
}

/**
 * Row for a single embed.
 * @constructor
 */
function EmbedRow({ index, embed }: { index: number; embed: string }): ReactElement {
    const artifactMetas = useStateStore.use.artifactMetas();
    const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
    const setEmbedIndex = useStateStore.use.setEmbedIndex();
    const setEmbed = useStateStore.use.setEmbed();
  const deleteEmbed = useStateStore.use.deleteEmbed();
  const allAssetPaths = useStateStore.use.allAssetPaths();

  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell>
        <ButtonGroup orientation={'vertical'}>
          <IconButton
            aria-label={'move up'}
            onClick={useCallback(() => {
              setEmbedIndex(index, Math.max(index - 1, 0));
            }, [index, setEmbedIndex])}
          >
            <ArrowDropUp />
          </IconButton>
          <IconButton
            aria-label={'move down'}
            onClick={useCallback(() => {
              setEmbedIndex(index, Math.min(index + 1, artifactMetas[currentArtifactIndex].embeds.length - 1));
            }, [index, setEmbedIndex, artifactMetas, currentArtifactIndex])}
          >
            <ArrowDropDown />
          </IconButton>
        </ButtonGroup>
      </TableCell>

      {/* File upload */}
      <TableCell>
        <Button
          aria-label={'upload embedded file'}
          component={'label'}
          startIcon={embed.length > 0 ? <Check /> : <AddPhotoAlternate />}
          disabled={allAssetPaths.length === 0}
        >
          Upload
          <VisuallyHiddenInput
            type={'file'}
            accept={'application/pdf'}
            onChange={useCallback(
              (event: ChangeEvent<HTMLInputElement>) => {
                // Exit early if no files were selected
                if (!event.target.files) {
                  return;
                }
                setEmbed(index, event.target.files[0].name);
              },
              [index, setEmbed],
            )}
          />
        </Button>
      </TableCell>

      {/* URL */}
      <TableCell>
        <TextField
          placeholder={'URL'}
          fullWidth
          value={embed}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setEmbed(index, event.target.value);
            },
            [index, setEmbed],
          )}
        />
      </TableCell>

      <TableCell>
        <IconButton
          aria-label={'remove'}
          onClick={useCallback(() => {
            deleteEmbed(index);
          }, [index, deleteEmbed])}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

/**
 * View for editing embeds.
 * @constructor
 */
function Embeds(): ReactElement {
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const createNewEmbed = useStateStore.use.createNewEmbed();

  return (
    <>
      <Typography variant={'h2'}>Embeds</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow />
          </TableHead>
          <TableBody>
            {artifactMetas[currentArtifactIndex].embeds.map((embed, index) => (
              <EmbedRow key={embed} index={index} embed={embed} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add embed'} startIcon={<Add />} onClick={createNewEmbed}>
        Add Embed
      </Button>
    </>
  );
}

export default Embeds;
