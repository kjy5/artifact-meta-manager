import { ArtifactMetas, Quarter, Year } from './artifact-meta-models.ts';

interface StoreState {
  /**
   * The index of the current artifact in the array of artifacts.
   */
  currentArtifactIndex: number;

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

  // Artifact actions

  /**
   * Creates a new blank artifact.
   */
  createNewArtifact: () => void;

  /**
   * Deletes the current artifact.
   */
  deleteCurrentArtifact: () => void;

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
}

type StoreModel = StoreState & StoreActions;

export default StoreModel;
