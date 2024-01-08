import {IconButton, MenuItem, Stack, TextField} from '@mui/material';
import {Add, Delete} from '@mui/icons-material';
import React, {ReactElement} from 'react';
import useStateStore from '../utils/store-manager.tsx';

/**
 * View for picking artifacts and loading meta file.
 * @constructor
 */
function ArtifactPicker(): ReactElement {
  // Select from store.
  const currentArtifactTitle = useStateStore.use.currentArtifactTitle();
  const setCurrentArtifactTitle = useStateStore.use.setCurrentArtifactTitle();
  const artifactTitles = Object.keys(useStateStore.use.artifactMetas());
  const setIsCreatingNewArtifact = useStateStore.use.setIsCreatingNewArtifact();

  return (
    <Stack spacing={1}>
      <Stack direction={'row'} spacing={2}>
        <TextField
          select
          label={'Artifact'}
          fullWidth
          value={currentArtifactTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentArtifactTitle(event.target.value);
          }}
        >
          {artifactTitles.map((artifactName: string) => (
            <MenuItem key={artifactName} value={artifactName}>
              {artifactName}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          aria-label={'add'}
          color={'primary'}
          onClick={() => {
            setIsCreatingNewArtifact(true);
          }}
        >
          <Add />
        </IconButton>

        <IconButton aria-label={'delete'} color={'error'}>
          <Delete />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default ArtifactPicker;
