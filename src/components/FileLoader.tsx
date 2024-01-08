import {Button, ButtonGroup} from '@mui/material';
import {FileDownload, UploadFile} from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import {ReactElement} from 'react';
import useStateStore from '../utils/store-manager.tsx';

/**
 * Component for loading and saving meta files.
 * @constructor
 */
function FileLoader(): ReactElement {
    const artifactMetas = useStateStore.use.artifactMetas();
  const downloadArtifactMetas = useStateStore.use.downloadArtifactMetas();

  return (
    <ButtonGroup>
      <Button aria-label={'upload meta file'} component={'label'} startIcon={<UploadFile />}>
        Upload Meta File
        <VisuallyHiddenInput type={'file'} accept={'image/*'} />
      </Button>
      <Button
        aria-label={'download meta file'}
        startIcon={<FileDownload />}
        onClick={downloadArtifactMetas}
        disabled={artifactMetas.length === 0}
      >
        Download Meta File
      </Button>
    </ButtonGroup>
  );
}

export default FileLoader;
