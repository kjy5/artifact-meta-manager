import { ArtifactMetas } from './artifact-meta-models.ts';

interface StoreState {
  currentArtifactIndex: number;
  artifactMetas: ArtifactMetas;
}

interface StoreActions {
  // State setters.
  setCurrentArtifactIndex: (currentArtifactIndex: number) => void;

  // Artifact actions
  createNewArtifact: () => void;

  // Artifact meta setters.
  setArtifactIndex: (index: number) => void;
  // setArtifactTitle: (title: string) => void;
}

type StoreModel = StoreState & StoreActions;

export default StoreModel;
