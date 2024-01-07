import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Add, DeleteForever } from '@mui/icons-material';

function App() {
  return (
    <Box sx={{ m: 2 }}>
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <InputLabel id={'artifact-select-label'}>Artifact</InputLabel>
          <Select labelId={'artifact-select-label'} label={'Artifact'}>
            <MenuItem value="1">Artifact 1</MenuItem>
            <MenuItem value="2">Artifact 2</MenuItem>
            <MenuItem value="3">Artifact 387293487923879</MenuItem>
          </Select>
        </FormControl>

        <IconButton aria-label={'add-artifact'} color={'primary'}>
          <Add />
        </IconButton>

        <IconButton aria-label={'delete-artifact'} color={'error'}>
          <DeleteForever />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default App;
