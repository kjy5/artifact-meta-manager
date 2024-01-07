import { Box, Container, Stack, Typography } from '@mui/material';
import ArtifactPicker from './components/ArtifactPicker.tsx';
import BasicInfo from './components/BasicInfo.tsx';
import Images from './components/Images.tsx';
import Links from './components/Links.tsx';

function App() {
  return (
    <Box sx={{ m: 2 }}>
      <Container>
        <Stack spacing={2}>
          <Typography variant={'h1'}>Artifact Meta Generator</Typography>

          <ArtifactPicker />
          <BasicInfo />
          <Images />
          <Links />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
