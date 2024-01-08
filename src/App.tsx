import {Box, Container, Stack, Typography} from '@mui/material';
import ArtifactPicker from './components/ArtifactPicker.tsx';
import {ReactElement} from 'react';
import BasicInfo from './components/BasicInfo.tsx';
import Images from './components/Images.tsx';
import Links from './components/Links.tsx';
import Embeds from './components/Embeds.tsx';
import useStateStore from './utils/store-manager.tsx';
import FileLoader from './components/FileLoader.tsx';

/**
 * App component
 * @constructor
 */
function App(): ReactElement {
  // Select from store.
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();

  return (
    <Box sx={{ m: 2 }}>
      <Container>
        <Stack spacing={2}>
          <Typography variant={'h1'}>Artifact Meta Manager</Typography>

          <FileLoader />
          <ArtifactPicker />

          {/* Show rest of UI when artifact is selected */}
          {currentArtifactIndex != -1 && (
            <>
              <BasicInfo />
              <Images />
              <Links />
              <Embeds />
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
