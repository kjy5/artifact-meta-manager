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
  const deleteCurrentArtifact = useStateStore.use.deleteCurrentArtifact();
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
            value={currentArtifactIndex < 0 ? '' : currentArtifactIndex}
            onChange={(event) => {
              setArtifactIndex(parseInt(event.target.value));
            }}
            disabled={currentArtifactIndex < 0}
            fullWidth
          />
        </Grid>

        <Grid xs>
          <TextField
            select
            label={'Artifact'}
            fullWidth
            value={artifactMetas[currentArtifactIndex]?.title ?? ''}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentArtifactIndex(artifactTitles.indexOf(event.target.value));
            }}
          >
            {artifactTitles.map((title) => (
              <MenuItem key={`key-${title}`} value={title}>
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
            disabled={artifactTitles.includes('')}
          >
            <Add />
          </IconButton>
        </Grid>

        <Grid xs={'auto'}>
          <IconButton
            aria-label={'delete'}
            color={'error'}
            disabled={currentArtifactIndex < 0}
            onClick={() => {
              deleteCurrentArtifact();
            }}
          >
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ArtifactPicker;
