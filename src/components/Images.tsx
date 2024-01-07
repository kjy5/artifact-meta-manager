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
import { AddPhotoAlternate, ArrowDropDown, ArrowDropUp, Delete } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';

function Images() {
  return (
    <>
      <Typography variant={'h2'}>Images</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
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
                <Button component={'label'} startIcon={<AddPhotoAlternate />}>
                  Upload
                  <VisuallyHiddenInput type={'file'} accept={'image/*'} />
                </Button>
              </TableCell>

              <TableCell>
                <TextField label={'Title'} multiline />
              </TableCell>

              <TableCell>
                <TextField label={'Description'} multiline />
              </TableCell>

              <TableCell>
                <TextField label={'Width'} />
              </TableCell>

              <TableCell>
                <TextField label={'Height'} />
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
    </>
  );
}

export default Images;
