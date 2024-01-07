import { Box, Container, Stack } from '@mui/material';
import ArtifactPicker from './components/ArtifactPicker.tsx';
import BasicInfo from './components/BasicInfo.tsx';

function App() {
  return (
    <Box sx={{ m: 2 }}>
      <Container>
        <Stack spacing={2}>
          <ArtifactPicker />
          <BasicInfo />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
