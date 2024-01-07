import { ArtifactMetas } from './artifact-meta-models.ts';

interface StateModel {
  currentArtifactTitle: string;
  artifactMetas: ArtifactMetas;
}

export default StateModel;
