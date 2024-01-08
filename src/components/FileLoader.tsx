import { Button, ButtonGroup } from '@mui/material';
import { FileDownload, UploadFile } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import { ReactElement } from 'react';

/**
 * Component for loading and saving meta files.
 * @constructor
 */
function FileLoader(): ReactElement {
  return (
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
  );
}

export default FileLoader;
