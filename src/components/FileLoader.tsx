import { Button, ButtonGroup } from '@mui/material';
import { Check, FileDownload, Folder, UploadFile } from '@mui/icons-material';
import VisuallyHiddenInput from './VisuallyHiddenInput.tsx';
import { ChangeEvent, ReactElement, useCallback } from 'react';
import useStateStore from '../utils/store-manager.tsx';

/**
 * Component for loading and saving meta files.
 * @constructor
 */
function FileLoader(): ReactElement {
  const artifactMetas = useStateStore.use.artifactMetas();
  const allAssetPaths = useStateStore.use.allAssetPaths();
  const uploadArtifactMetas = useStateStore.use.uploadArtifactMetas();
  const setAllAssetPaths = useStateStore.use.setAllAssetPaths();
  const downloadArtifactMetas = useStateStore.use.downloadArtifactMetas();

  return (
    <ButtonGroup>
      <Button
        aria-label={'upload meta file'}
        component={'label'}
        startIcon={artifactMetas.length > 0 ? <Check /> : <UploadFile />}
      >
        Upload Meta File
        <VisuallyHiddenInput
          type={'file'}
          accept={'application/json'}
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              if (event.target.files) {
                uploadArtifactMetas(event.target.files[0]);
              }
            },
            [uploadArtifactMetas],
          )}
        />
      </Button>

      <Button
        aria-label={'pick public directory'}
        component={'label'}
        startIcon={allAssetPaths.length > 0 ? <Check /> : <Folder />}
      >
        Select Public folder
        <VisuallyHiddenInput
          type={'file'}
          webkitdirectory={''}
          directory={''}
          multiple
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
              if (event.target.files) {
                // Extract paths of all files and remove `public` directory from the path.
                setAllAssetPaths(
                  [...event.target.files].map((file) =>
                    file.webkitRelativePath.substring(file.webkitRelativePath.indexOf('/')),
                  ),
                );
              }
            },
            [setAllAssetPaths],
          )}
        />
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
