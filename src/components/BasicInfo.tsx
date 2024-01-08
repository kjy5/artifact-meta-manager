import { MenuItem, Stack, TextField, Typography } from '@mui/material';
import { Quarter, Year } from '../models/artifact-meta-models.ts';
import { ReactElement } from 'react';
import useStateStore from '../utils/store-manager.tsx';

/**
 * Stack of identifying info fields.
 * @constructor
 */
function IdentifyingInfoStack(): ReactElement {
  // Select from store.
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const currentArtifact = artifactMetas[currentArtifactIndex];

  const setArtifactTitle = useStateStore.use.setArtifactTitle();
  const setArtifactSubtitle = useStateStore.use.setArtifactSubtitle();
  const setArtifactYear = useStateStore.use.setArtifactYear();
  const setArtifactQuarter = useStateStore.use.setArtifactQuarter();

  return (
    <Stack spacing={1}>
      <TextField
        label={'Title'}
        multiline
        value={currentArtifact.title}
        onChange={(event) => {
          setArtifactTitle(event.target.value);
        }}
      />

      <TextField
        label={'Subtitle'}
        multiline
        value={currentArtifact.subtitle}
        onChange={(event) => {
          setArtifactSubtitle(event.target.value);
        }}
      />

      <TextField
        select
        label={'Year'}
        value={currentArtifact.year}
        onChange={(event) => {
          setArtifactYear(parseInt(event.target.value));
        }}
      >
        <MenuItem value={Year.Freshman}>Freshman</MenuItem>
        <MenuItem value={Year.Sophomore}>Sophomore</MenuItem>
        <MenuItem value={Year.Junior}>Junior</MenuItem>
        <MenuItem value={Year.Senior}>Senior</MenuItem>
      </TextField>

      <TextField
        select
        label={'Quarter'}
        value={currentArtifact.quarter}
        onChange={(event) => {
          setArtifactQuarter(parseInt(event.target.value));
        }}
      >
        <MenuItem value={Quarter.Fall}>Fall</MenuItem>
        <MenuItem value={Quarter.Winter}>Winter</MenuItem>
        <MenuItem value={Quarter.Spring}>Spring</MenuItem>
        <MenuItem value={Quarter.Summer}>Summer</MenuItem>
      </TextField>
    </Stack>
  );
}

/**
 * View for editing basic info.
 * @constructor
 */
function BasicInfo(): ReactElement {
  // Select from store.
  const currentArtifactIndex = useStateStore.use.currentArtifactIndex();
  const artifactMetas = useStateStore.use.artifactMetas();
  const currentArtifact = artifactMetas[currentArtifactIndex];

  const setArtifactText = useStateStore.use.setArtifactText();

  return (
    <>
      <Typography variant={'h2'}>Basic Info</Typography>

      <Stack direction={'row'} spacing={1}>
        <IdentifyingInfoStack />
        <TextField
          label={'Text'}
          multiline
          fullWidth
          value={currentArtifact.text}
          onChange={(event) => {
            setArtifactText(event.target.value);
          }}
        />
      </Stack>
    </>
  );
}

export default BasicInfo;
