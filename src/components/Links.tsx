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
import { ReactElement } from 'react';

function TableHeader() {
  return (
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
  );
}

function LinkRow() {
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
        <TextField placeholder={'URL'} />
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
  return (
    <>
      <Typography variant={'h2'}>Links</Typography>
      <TableContainer>
        <Table>
          <TableHeader />
          <TableBody>
            <LinkRow />
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
