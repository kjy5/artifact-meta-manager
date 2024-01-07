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
import { Add, AddPhotoAlternate, ArrowDropDown, ArrowDropUp, Delete } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';

function Images() {
  return (
    <>
      <Typography variant={'h2'}>Images</Typography>
      <TableContainer>
        <Table>
          <TableHead>
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
          </TableHead>
          <TableBody>
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
