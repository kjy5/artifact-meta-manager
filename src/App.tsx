import {Box, Container, Stack, Typography} from '@mui/material';
import ArtifactPicker from './components/ArtifactPicker.tsx';
import {ReactElement, useState} from 'react';
import StateModel from './models/state-model.tsx';
import BasicInfo from './components/BasicInfo.tsx';
import Images from './components/Images.tsx';
import Links from './components/Links.tsx';
import Embeds from './components/Embeds.tsx';
import AppVm from './app-vm.ts';

/**
 * App component
 * @constructor
 */
function App(): ReactElement {
  // Initialize state and ViewModel.
  const stateHook = useState({ currentArtifactTitle: '', artifactMetas: {} } as StateModel);
  const appVm = new AppVm(stateHook);

  return (
    <Box sx={{ m: 2 }}>
      <Container>
        <Stack spacing={2}>
          <Typography variant={'h1'}>Artifact Meta Manager</Typography>

          <ArtifactPicker
            currentArtifact={appVm.getCurrentArtifactTitle()}
            onArtifactSelectionChanged={appVm.changeCurrentArtifactTitle}
            artifactNames={appVm.getArtifactNames()}
            onArtifactCreated={appVm.createNewArtifact}
          />

          {/* Show rest of UI when artifact is selected */}
          {appVm.getCurrentArtifactTitle().length > 0 && (
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
