import { IconButton, MenuItem, Stack, TextField } from '@mui/material';
import { Add, DeleteForever } from '@mui/icons-material';

function ArtifactPicker() {
  return (
    <Stack direction={'row'} spacing={2}>
      <TextField select label={'Artifact'} fullWidth>
        <MenuItem value="1">Artifact 1</MenuItem>
        <MenuItem value="2">Artifact 2</MenuItem>
        <MenuItem value="3">Artifact 387293487923879</MenuItem>
      </TextField>

      <IconButton aria-label={'add-artifact'} color={'primary'}>
        <Add />
      </IconButton>

      <IconButton aria-label={'delete-artifact'} color={'error'}>
        <DeleteForever />
      </IconButton>
    </Stack>
  );
}

export default ArtifactPicker;
