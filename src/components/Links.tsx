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
import { Add, ArrowDropDown, ArrowDropUp, Delete } from '@mui/icons-material';

function Links() {
  return (
    <>
      <Typography variant={'h2'}>Links</Typography>
      <TableContainer>
        <Table>
          <TableHead>
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
          </TableHead>
          <TableBody>
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
                <TextField label={'URL'} />
              </TableCell>

              {/* Title */}
              <TableCell>
                <TextField label={'Title'} multiline />
              </TableCell>

              {/* Description */}
              <TableCell>
                <TextField label={'Description'} multiline />
              </TableCell>

              {/* Image URL */}
              <TableCell>
                <TextField label={'Image URL'} />
              </TableCell>

              {/* Favicon URL */}
              <TableCell>
                <TextField label={'Favicon URL'} />
              </TableCell>

              {/* Domain */}
              <TableCell>
                <TextField label={'Domain'} />
              </TableCell>

              {/* Remove */}
              <TableCell>
                <IconButton aria-label={'remove'}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add link'} startIcon={<Add />}>
        Add Link
      </Button>
    </>
  );
}

export default Links;
