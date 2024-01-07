import {MenuItem, Stack, TextField, Typography} from '@mui/material';
import {Quarter, Year} from '../models/artifact-meta-models.ts';
import {ReactElement} from 'react';

/**
 * Stack of identifying info fields.
 * @constructor
 */
function IdentifyingInfoStack(): ReactElement {
  return (
    <Stack spacing={1}>
      <TextField label={'Title'} multiline />

      <TextField label={'Subtitle'} multiline />

      <TextField select label={'Year'}>
        <MenuItem value={Year.Freshman}>Freshman</MenuItem>
        <MenuItem value={Year.Sophomore}>Sophomore</MenuItem>
        <MenuItem value={Year.Junior}>Junior</MenuItem>
        <MenuItem value={Year.Senior}>Senior</MenuItem>
      </TextField>

      <TextField select label={'Quarter'}>
        <MenuItem value={Quarter.Fall}>Fall</MenuItem>
        <MenuItem value={Quarter.Winter}>Winter</MenuItem>
        <MenuItem value={Quarter.Spring}>Spring</MenuItem>
        <MenuItem value={Quarter.Summer}>Summer</MenuItem>
      </TextField>
    </Stack>
  );
}

/**
 * View for editing basic info.
 * @constructor
 */
function BasicInfo(): ReactElement {
  return (
    <>
      <Typography variant={'h2'}>Basic Info</Typography>

      <Stack direction={'row'} spacing={1}>
        <IdentifyingInfoStack />
        <TextField label={'Text'} multiline fullWidth />
      </Stack>
    </>
  );
}

export default BasicInfo;
