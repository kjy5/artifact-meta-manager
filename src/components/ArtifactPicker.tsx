import {Box, IconButton, MenuItem, TextField} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {Add, Delete} from '@mui/icons-material';
import React, {ReactElement} from 'react';
import useStateStore from '../utils/store-manager.tsx';

/**
 * View for picking artifacts and loading meta file.
 * @constructor
 */
function ArtifactPicker(): ReactElement {
  // Select from store.
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const setCurrentArtifactIndex = useStateStore.use.setCurrentArtifactIndex();
  const createNewArtifact = useStateStore.use.createNewArtifact();
  const setArtifactIndex = useStateStore.use.setArtifactIndex();

  const artifactTitles = artifactMetas.map(({ title }) => title);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid xs={1}>
          <TextField
            type={'number'}
            inputProps={{ min: 0, max: artifactMetas.length - 1 }}
            label={'Index'}
            value={currentArtifactIndex >= 0 ? currentArtifactIndex : ''}
            onChange={(event) => {
              setArtifactIndex(parseInt(event.target.value));
            }}
            fullWidth
          />
        </Grid>

        <Grid xs>
          <TextField
            select
            label={'Artifact'}
            fullWidth
            value={currentArtifactIndex >= 0 ? artifactMetas[currentArtifactIndex].title : ''}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentArtifactIndex(artifactTitles.indexOf(event.target.value));
            }}
          >
            {artifactTitles.map((title) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid xs={'auto'}>
          <IconButton
            aria-label={'add'}
            color={'primary'}
            onClick={() => {
              createNewArtifact();
            }}
          >
            <Add />
          </IconButton>
        </Grid>

        <Grid xs={'auto'}>
          <IconButton aria-label={'delete'} color={'error'}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ArtifactPicker;
