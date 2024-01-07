import { MenuItem, Stack, TextField } from '@mui/material';

function BasicInfo() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
      <Stack spacing={1}>
        <TextField label={'Title'} multiline />

        <TextField label={'Subtitle'} multiline />

        <TextField select label={'Year'}>
          <MenuItem value={0}>Freshman</MenuItem>
        </TextField>

        <TextField select label={'Quarter'}>
          <MenuItem value={0}>Fall</MenuItem>
        </TextField>
      </Stack>

      <TextField label={'Text'} multiline fullWidth />
    </Stack>
  );
}

export default BasicInfo;
