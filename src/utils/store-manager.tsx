import StoreModel from '../models/store-model.tsx';
import { create } from 'zustand';
import createSelectors from './create-selectors.ts';
import { Artifact, ArtifactMetas } from '../models/artifact-meta-models.ts';

const useStateStoreBase = create<StoreModel>()((set) => ({
  // Default default state.
  currentArtifactIndex: -1,
  isCreatingNewArtifact: false,
  artifactMetas: [] as ArtifactMetas,

  // Implement actions.
  setCurrentArtifactIndex: (currentArtifactIndex: number) => {
    set({ currentArtifactIndex });
  },

  createNewArtifact: () => {
    set((state) => {
      const { artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Create new blank entry.
      newArtifactMetas.push({} as Artifact);

      // Update state to point to new entry.
      return {
        currentArtifactIndex: artifactMetas.length,
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setArtifactIndex: (index: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact meta.
      const artifact = { ...artifactMetas[currentArtifactIndex] };

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Remove artifact from old index.
      newArtifactMetas.splice(currentArtifactIndex, 1);

      // Insert artifact at new index.
      newArtifactMetas.splice(index, 0, artifact);

      // Update state.
      return {
        currentArtifactIndex: index,
        artifactMetas: newArtifactMetas,
      };
    });
  },

  // setArtifactTitle: (title: string) => {
  //   set((state) => {
  //     const { currentArtifactIndex, artifactMetas } = state;
  //     console.log(artifactMetas)
  //
  //     // Create copy of artifact metas
  //     const newArtifactMetas = Object.assign(new Map<string, Artifact>(), artifactMetas);
  //
  //     // Create entry with new title and pull from old entry if it exists.
  //     newArtifactMetas.set(title, { title: title } as Artifact);
  //
  //     // Delete old entry if it exists.
  //     newArtifactMetas.delete(currentArtifactTitle);
  //
  //     // Update state.
  //     return {
  //       currentArtifactTitle: title,
  //       artifactMetas: newArtifactMetas,
  //     };
  //   });
  // },
}));

const useStateStore = createSelectors(useStateStoreBase);

export default useStateStore;
