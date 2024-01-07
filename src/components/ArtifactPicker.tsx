import { Button, ButtonGroup, IconButton, MenuItem, Stack, TextField } from '@mui/material';
import { Add, Delete, FileDownload, UploadFile } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import { ReactElement } from 'react';

/**
 * View for picking artifacts and loading meta file.
 * @constructor
 */
function ArtifactPicker(): ReactElement {
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
        <TextField select label={'Artifact'} fullWidth>
          <MenuItem value="1">Artifact 1</MenuItem>
          <MenuItem value="2">Artifact 2</MenuItem>
          <MenuItem value="3">Artifact 387293487923879</MenuItem>
        </TextField>

        <IconButton aria-label={'add'} color={'primary'}>
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
