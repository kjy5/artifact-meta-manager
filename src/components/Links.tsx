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
import { Add, ArrowDropDown, ArrowDropUp, Check, Delete, FindInPage } from '@mui/icons-material';
import { ChangeEvent, ReactElement, useCallback } from 'react';
import { LinkExtract, LinkMeta } from '../models/artifact-meta-models.ts';
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
  const artifactMetas = useStateStore.use.artifactMetas();
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const setLinkIndex = useStateStore.use.setLinkIndex();
  const setLinkUrl = useStateStore.use.setLinkUrl();
  const setLinkTitle = useStateStore.use.setLinkTitle();
  const setLinkDescription = useStateStore.use.setLinkDescription();
  const setLinkImageSrc = useStateStore.use.setLinkImageSrc();
  const setLinkFaviconSrc = useStateStore.use.setLinkFaviconSrc();
  const setLinkDomain = useStateStore.use.setLinkDomain();
  const deleteLink = useStateStore.use.deleteLink();

  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell>
        <ButtonGroup orientation={'vertical'}>
          <IconButton
            aria-label={'move up'}
            onClick={useCallback(() => {
              setLinkIndex(index, Math.max(index - 1, 0));
            }, [index, setLinkIndex])}
          >
            <ArrowDropUp />
          </IconButton>
          <IconButton
            aria-label={'move down'}
            onClick={useCallback(() => {
              setLinkIndex(index, Math.min(index + 1, artifactMetas[currentArtifactIndex].links.length - 1));
            }, [index, setLinkIndex, artifactMetas, currentArtifactIndex])}
          >
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
                  return response.json() as Promise<LinkExtract>;
                })
                .then((data) => {
                  setLinkTitle(index, data.title);
                  setLinkDescription(index, data.description);
                  if (data.images.length > 0) {
                    setLinkImageSrc(index, data.images[0]);
                  }
                  setLinkFaviconSrc(index, data.favicon);
                  setLinkDomain(index, data.domain);
                })
                .catch((error) => {
                  console.error('An error occurred:', error);
                });
            }, [link.url, index, setLinkTitle, setLinkDescription, setLinkImageSrc, setLinkFaviconSrc, setLinkDomain])}
          >
            Extract Info
          </Button>
        </Stack>
      </TableCell>

      {/* Title */}
      <TableCell>
        <TextField
          placeholder={'Title'}
          multiline
          value={link.title}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setLinkTitle(index, event.target.value);
            },
            [index, setLinkTitle],
          )}
        />
      </TableCell>

      {/* Description */}
      <TableCell>
        <TextField
          placeholder={'Description'}
          multiline
          value={link.description}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setLinkDescription(index, event.target.value);
            },
            [index, setLinkDescription],
          )}
        />
      </TableCell>

      {/* Image URL */}
      <TableCell>
        <TextField
          placeholder={'Image URL'}
          value={link.imageSrc}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setLinkImageSrc(index, event.target.value);
            },
            [index, setLinkImageSrc],
          )}
        />
      </TableCell>

      {/* Favicon URL */}
      <TableCell>
        <TextField
          placeholder={'Favicon URL'}
          value={link.faviconSrc}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setLinkFaviconSrc(index, event.target.value);
            },
            [index, setLinkFaviconSrc],
          )}
        />
      </TableCell>

      {/* Domain */}
      <TableCell>
        <TextField
          placeholder={'Domain'}
          value={link.domain}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setLinkDomain(index, event.target.value);
            },
            [index, setLinkDomain],
          )}
        />
      </TableCell>

      {/* Remove */}
      <TableCell>
        <IconButton
          aria-label={'remove'}
          onClick={useCallback(() => {
            deleteLink(index);
          }, [index, deleteLink])}
        >
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
