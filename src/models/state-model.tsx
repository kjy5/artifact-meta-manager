import { ArtifactMetas } from './artifact-meta-models.ts';

interface StateModel {
  currentArtifact: string;
  artifactMetas: ArtifactMetas;
}

export default StateModel;
