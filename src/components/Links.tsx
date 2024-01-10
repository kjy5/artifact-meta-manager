import {
    Button,
    ButtonGroup,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import {Add, ArrowDropDown, ArrowDropUp, Check, Delete, FindInPage} from '@mui/icons-material';
import {ChangeEvent, ReactElement, useCallback} from 'react';
import {LinkMeta} from '../models/artifact-meta-models.ts';
import useStateStore from '../utils/store-manager.tsx';

/**
 * Header row for links table.
 * @constructor
 */
function HeaderRow(): ReactElement {
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell />

      <TableCell>URL</TableCell>
      <TableCell>Title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Image URL</TableCell>
      <TableCell>Favicon URL</TableCell>
      <TableCell>Domain</TableCell>
      <TableCell>Remove</TableCell>
    </TableRow>
  );
}

/**
 * Row for a single link.
 * @constructor
 */
function LinkRow({ index, link }: { index: number; link: LinkMeta }): ReactElement {
  const setLinkUrl = useStateStore.use.setLinkUrl();
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell>
        <ButtonGroup orientation={'vertical'}>
          <IconButton aria-label={'move up'}>
            <ArrowDropUp />
          </IconButton>
          <IconButton aria-label={'move down'}>
            <ArrowDropDown />
          </IconButton>
        </ButtonGroup>
      </TableCell>

      {/* URL */}
      <TableCell>
        <Stack spacing={1}>
          <TextField
            placeholder={'URL'}
            value={link.url}
            onChange={useCallback(
              (event: ChangeEvent<HTMLInputElement>) => {
                setLinkUrl(index, event.target.value);
              },
              [index, setLinkUrl],
            )}
          />
          <Button
            aria-label={'extract from website'}
            startIcon={
              link.title.length > 0 &&
              link.description.length > 0 &&
              link.imageSrc.length > 0 &&
              link.faviconSrc.length > 0 &&
              link.domain.length > 0 ? (
                <Check />
              ) : (
                <FindInPage />
              )
            }
            onClick={useCallback(() => {
              const apiUrl = `https://jsonlink.io/api/extract?url=${link.url}&api_key=${
                import.meta.env.VITE_JSONLINK_KEY
              }`;

              // Make a GET request using the Fetch API
              fetch(apiUrl)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                  }
                  return response.json();
                })
                .then((data) => {
                  console.log(data); // Process the JSON response
                })
                .catch((error) => {
                  console.error('An error occurred:', error);
                });
            }, [link.url])}
          >
            Extract Info
          </Button>
        </Stack>
      </TableCell>

      {/* Title */}
      <TableCell>
        <TextField placeholder={'Title'} multiline />
      </TableCell>

      {/* Description */}
      <TableCell>
        <TextField placeholder={'Description'} multiline />
      </TableCell>

      {/* Image URL */}
      <TableCell>
        <TextField placeholder={'Image URL'} />
      </TableCell>

      {/* Favicon URL */}
      <TableCell>
        <TextField placeholder={'Favicon URL'} />
      </TableCell>

      {/* Domain */}
      <TableCell>
        <TextField placeholder={'Domain'} />
      </TableCell>

      {/* Remove */}
      <TableCell>
        <IconButton aria-label={'remove'}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

/**
 * View for editing links.
 * @constructor
 */
function Links(): ReactElement {
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const createNewLink = useStateStore.use.createNewLink();

  return (
    <>
      <Typography variant={'h2'}>Links</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow />
          </TableHead>
          <TableBody>
            {artifactMetas[currentArtifactIndex].links.map((link, index) => (
              <LinkRow key={link.url} index={index} link={link} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add link'} startIcon={<Add />} onClick={createNewLink}>
        Add Link
      </Button>
    </>
  );
}

export default Links;
