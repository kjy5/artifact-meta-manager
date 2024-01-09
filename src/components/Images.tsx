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
import {Add, AddPhotoAlternate, ArrowDropDown, ArrowDropUp, Delete, Folder} from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import {ReactElement} from 'react';

/**
 * Header row for images table.
 * @constructor
 */
function HeaderRow(): ReactElement {
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell />

      <TableCell>Image</TableCell>
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
function ImageRow(): ReactElement {
  return (
    <TableRow>
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
        <Button aria-label={'upload image'} component={'label'} startIcon={<AddPhotoAlternate />}>
          Upload
          <VisuallyHiddenInput type={'file'} accept={'image/*'} />
        </Button>
      </TableCell>

      <TableCell>
        <TextField placeholder={'Title'} multiline />
      </TableCell>

      <TableCell>
        <TextField placeholder={'Description'} multiline />
      </TableCell>

      <TableCell>
        <TextField placeholder={'Width'} />
      </TableCell>

      <TableCell>
        <TextField placeholder={'Height'} />
      </TableCell>

      <TableCell>
        <IconButton aria-label={'remove'}>
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
  // const setCurrentArtifactImagesRoot = useStateStore.use.setCurrentArtifactImagesRoot();
  return (
    <>
      <Typography variant={'h2'}>Images</Typography>

      <Button
        aria-label={'pick image directory'}
        startIcon={<Folder />}
        // onClick={useCallback(async () => {
        //   const directoryHandle: FileSystemDirectoryHandle = await window.showDirectoryPicker();
        //   setCurrentArtifactImagesRoot(directoryHandle.name);
        // }, [setCurrentArtifactImagesRoot])}
      >
        Select Base folder
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow />
          </TableHead>
          <TableBody>
            <ImageRow />
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add image'} startIcon={<Add />}>
        Add Image
      </Button>
    </>
  );
}

export default Images;
