import { ArtifactMetas, Quarter, Year } from './artifact-meta-models.ts';

interface StoreState {
  /**
   * The index of the current artifact in the array of artifacts.
   */
  currentArtifactIndex: number;

  /**
   * List of all asset paths from the `public` directory.
   */
  allAssetPaths: string[];

  /**
   * The array of artifact metadata.
   */
  artifactMetas: ArtifactMetas;
}

interface StoreActions {
  // State setters.

  /**
   * Sets the index of the current artifact.
   * @param currentArtifactIndex The index of the current artifact.
   */
  setCurrentArtifactIndex: (currentArtifactIndex: number) => void;

  /**
   * Sets the list of all asset paths.
   * @param allAssetPaths The list of all asset paths.
   */
  setAllAssetPaths: (allAssetPaths: string[]) => void;

  // Artifact actions

  /**
   * Loads an artifact meta file and replace the in-memory artifact metas.
   * @param file The file uploaded.
   */
  uploadArtifactMetas: (file: File) => void;

  /**
   * Downloads the current artifact metas as a JSON file.
   */
  downloadArtifactMetas: () => void;

  /**
   * Creates a new blank artifact.
   */
  createNewArtifact: () => void;

  /**
   * Deletes the current artifact.
   */
  deleteCurrentArtifact: () => void;

  /**
   * Creates a new blank image in the current artifact.
   */
  createNewImage: () => void;

  /**
   * Deletes an image from the current artifact.
   * @param index The index of the image to delete.
   */
  deleteImage: (index: number) => void;

  // Artifact meta setters.

  /**
   * Changes the index of the currently viewed artifact (changes its order).
   * @param index New index to set.
   */
  setArtifactIndex: (index: number) => void;

  /**
   * Sets the title metadata of the current artifact.
   * @param title The title to set.
   */
  setArtifactTitle: (title: string) => void;

  /**
   * Sets the subtitle metadata of the current artifact.
   * @param subtitle The subtitle to set.
   */
  setArtifactSubtitle: (subtitle: string) => void;

  /**
   * Sets the year metadata of the current artifact.
   * @param year The year to set.
   */
  setArtifactYear: (year: Year) => void;

  /**
   * Sets the quarter metadata of the current artifact.
   * @param quarter The quarter to set.
   */
  setArtifactQuarter: (quarter: Quarter) => void;

  /**
   * Sets the text metadata of the current artifact.
   * @param text The text to set.
   */
  setArtifactText: (text: string) => void;

  /**
   * Sets the image src metadata of the current artifact.
   * @param index The index of the image in the current artifact.
   * @param src The src to set.
   */
  setImageSrc: (index: number, src: string) => void;

  /**
   * Sets the image thumbnail src metadata of the current artifact.
   * @param index The index of the image in the current artifact.
   * @param src The src to set.
   */
  setImageThumbnailSrc: (index: number, src: string) => void;

  /**
   * Sets the image width metadata of the current artifact.
   * @param index
   * @param width
   */
  setImageWidth: (index: number, width: number) => void;

  /**
   * Sets the image height metadata of the current artifact.
   * @param index
   * @param height
   */
  setImageHeight: (index: number, height: number) => void;
}

type StoreModel = StoreState & StoreActions;

export default StoreModel;
