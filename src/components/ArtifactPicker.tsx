import { Button, ButtonGroup, IconButton, MenuItem, Stack, TextField } from '@mui/material';
import { Add, Delete, FileDownload, UploadFile } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import React, { ReactElement } from 'react';

interface ArtifactPickerProps {
  currentArtifact: string;
  onArtifactSelectionChanged: (artifactTitle: string) => void;
  artifactNames: string[];

  onArtifactCreated: () => void;
}

/**
 * View for picking artifacts and loading meta file.
 * @constructor
 */
function ArtifactPicker({
                          currentArtifact,
                          onArtifactSelectionChanged,
                          artifactNames,
                          onArtifactCreated,
                        }: ArtifactPickerProps): ReactElement {
  return (
    <Stack spacing={1}>
      {/* Artifact meta file upload download */}
      <ButtonGroup>
        <Button aria-label={'upload meta file'} component={'label'} startIcon={<UploadFile />}>
          Upload Meta File
          <VisuallyHiddenInput type={'file'} accept={'image/*'} />
        </Button>
        <Button aria-label={'download meta file'} component={'label'} startIcon={<FileDownload />}>
          Download Meta File
          <VisuallyHiddenInput type={'file'} accept={'image/*'} />
        </Button>
      </ButtonGroup>

      <Stack direction={'row'} spacing={2}>
        <TextField
          select
          label={'Artifact'}
          fullWidth
          value={currentArtifact}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onArtifactSelectionChanged(event.target.value)}
        >
          {artifactNames.map((artifactName: string) => (
            <MenuItem key={artifactName} value={artifactName}>
              {artifactName}
            </MenuItem>
          ))}
        </TextField>

        <IconButton aria-label={'add'} color={'primary'} onClick={onArtifactCreated}>
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
