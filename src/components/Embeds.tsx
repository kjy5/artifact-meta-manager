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
import { Add, ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

function Embeds() {
  return (
    <>
      <Typography variant={'h2'}>Embeds</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* Placement buttons */}
              <TableCell />

              <TableCell>URL</TableCell>
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
                <TextField placeholder={'URL'} fullWidth />
              </TableCell>
            </TableRow>
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
