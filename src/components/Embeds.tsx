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
import {Add, ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import {ReactElement} from 'react';

/**
 * Header row for embeds table.
 * @constructor
 */
function HeaderRow(): ReactElement {
  return (
    <TableRow>
      {/* Placement buttons */}
      <TableCell />

      <TableCell>URL</TableCell>
    </TableRow>
  );
}

/**
 * Row for a single embed.
 * @constructor
 */
function EmbedRow(): ReactElement {
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
        <TextField placeholder={'URL'} fullWidth />
      </TableCell>
    </TableRow>
  );
}

/**
 * View for editing embeds.
 * @constructor
 */
function Embeds(): ReactElement {
    return (
        <>
            <Typography variant={'h2'}>Embeds</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <HeaderRow/>
                    </TableHead>
                    <TableBody>
                        <EmbedRow/>
          </TableBody>
        </Table>
      </TableContainer>

      <Button aria-label={'add embed'} startIcon={<Add />}>
        Add Embed
      </Button>
    </>
  );
}

export default Embeds;
