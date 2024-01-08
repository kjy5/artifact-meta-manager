import { ArtifactMetas } from './artifact-meta-models.ts';

interface StoreState {
  currentArtifactTitle: string;
  isCreatingNewArtifact: boolean;
  artifactMetas: ArtifactMetas;
}

interface StoreActions {
  setCurrentArtifactTitle: (currentArtifactTitle: string) => void;
  setIsCreatingNewArtifact: (isCreatingNewArtifact: boolean) => void;
}

type StoreModel = StoreState & StoreActions;

export default StoreModel;
