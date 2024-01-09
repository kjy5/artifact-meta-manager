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
import {Add, AddPhotoAlternate, ArrowDropDown, ArrowDropUp, Check, Delete} from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import {ChangeEvent, ReactElement, useCallback} from 'react';
import {ImageMeta} from '../models/artifact-meta-models.ts';
import useStateStore from '../utils/store-manager.tsx';

/**
 * Header row for images table.
 * @constructor
 */
function HeaderRow(): ReactElement {
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell />

      <TableCell>Image URL</TableCell>
      <TableCell>Thumbnail URL</TableCell>
      <TableCell>Title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Width</TableCell>
      <TableCell>Height</TableCell>
      <TableCell>Remove</TableCell>
    </TableRow>
  );
}

/**
 * Row for a single image.
 * @constructor
 */
function ImageRow({ index, image }: { index: number; image: ImageMeta }): ReactElement {
  const allAssetPaths = useStateStore.use.allAssetPaths();
  const setImageSrc = useStateStore.use.setImageSrc();
  const setImageThumbnailSrc = useStateStore.use.setImageThumbnailSrc();
  const setImageTitle = useStateStore.use.setImageTitle();
  const setImageDescription = useStateStore.use.setImageDescription();
  const setImageWidth = useStateStore.use.setImageWidth();
  const setImageHeight = useStateStore.use.setImageHeight();
  const deleteImage = useStateStore.use.deleteImage();

  return (
    <TableRow>
      {/* Placement */}
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

      <TableCell>
        <Stack spacing={1}>
          <Button
            aria-label={'upload image'}
            component={'label'}
            startIcon={image.src.length > 0 ? <Check /> : <AddPhotoAlternate />}
            disabled={allAssetPaths.length === 0}
          >
            Upload
            <VisuallyHiddenInput
              type={'file'}
              accept={'image/*'}
              onChange={useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    // Update image src.
                    setImageSrc(index, event.target.files[0].name);

                    // Pull width and height from image.
                    const image = new Image();
                    image.src = URL.createObjectURL(event.target.files[0]);
                    image.onload = () => {
                      setImageWidth(index, image.width);
                      setImageHeight(index, image.height);
                    };
                  }
                },
                [index, setImageSrc, setImageWidth, setImageHeight],
              )}
            />
          </Button>
          <TextField
            placeholder={'Image URL...'}
            multiline
            value={image.src}
            onChange={useCallback(
              (event: ChangeEvent<HTMLInputElement>) => {
                setImageSrc(index, event.target.value);
              },
              [index, setImageSrc],
            )}
          />
        </Stack>
      </TableCell>

      <TableCell>
        <Stack spacing={1}>
          <Button
            aria-label={'upload thumbnail'}
            component={'label'}
            startIcon={image.thumbnailSrc.length > 0 ? <Check /> : <AddPhotoAlternate />}
            disabled={allAssetPaths.length === 0}
          >
            Upload
            <VisuallyHiddenInput
              type={'file'}
              accept={'image/*'}
              onChange={useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setImageThumbnailSrc(index, event.target.files[0].name);
                  }
                },
                [index, setImageThumbnailSrc],
              )}
            />
          </Button>
          <TextField
            placeholder={'Thumbnail URL'}
            multiline
            value={image.thumbnailSrc}
            onChange={useCallback(
              (event: ChangeEvent<HTMLInputElement>) => {
                setImageThumbnailSrc(index, event.target.value);
              },
              [index, setImageThumbnailSrc],
            )}
          />
        </Stack>
      </TableCell>

      <TableCell>
        <TextField
          placeholder={'Title'}
          multiline
          value={image.title}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setImageTitle(index, event.target.value);
            },
            [index, setImageTitle],
          )}
        />
      </TableCell>

      <TableCell>
        <TextField
          placeholder={'Description'}
          multiline
          value={image.description}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setImageDescription(index, event.target.value);
            },
            [index, setImageDescription],
          )}
        />
      </TableCell>

      <TableCell>
        <TextField
          placeholder={'Width'}
          value={image.width}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setImageWidth(index, parseInt(event.target.value));
            },
            [index, setImageWidth],
          )}
        />
      </TableCell>

      <TableCell>
        <TextField
          placeholder={'Height'}
          value={image.height}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              setImageHeight(index, parseInt(event.target.value));
            },
            [index, setImageHeight],
          )}
        />
      </TableCell>

      <TableCell>
        <IconButton
          aria-label={'remove'}
          onClick={useCallback(() => {
            deleteImage(index);
          }, [index, deleteImage])}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

/**
 * View for editing images.
 * @constructor
 */
function Images(): ReactElement {
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const createNewImage = useStateStore.use.createNewImage();

  return (
    <>
      <Typography variant={'h2'}>Images</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow />
          </TableHead>
          <TableBody>
            {artifactMetas[currentArtifactIndex].images.map((image, index) => (
              <ImageRow key={`image-${index}`} index={index} image={image} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add image'} startIcon={<Add />} onClick={createNewImage}>
        Add Image
      </Button>
    </>
  );
}

export default Images;
