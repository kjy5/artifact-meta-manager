import StoreModel from '../models/store-model.tsx';
import { create } from 'zustand';
import createSelectors from './create-selectors.ts';
import { Artifact, createBlankArtifact } from '../models/artifact-meta-models.ts';

const useStateStoreBase = create<StoreModel>()((set) => ({
  // Default default state.
  currentArtifactIndex: -1,
  isCreatingNewArtifact: false,
  artifactMetas: [],

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
      newArtifactMetas.push(createBlankArtifact());

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

  setArtifactTitle: (title: string) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update title of artifact at current index.
      newArtifactMetas[currentArtifactIndex] = { ...newArtifactMetas[currentArtifactIndex], title: title };

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setArtifactSubtitle: (subtitle: string) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update subtitle of artifact at current index.
      newArtifactMetas[currentArtifactIndex] = {
        ...newArtifactMetas[currentArtifactIndex],
        subtitle: subtitle,
      } as Artifact;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setArtifactYear: (year: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update year of artifact at current index.
      newArtifactMetas[currentArtifactIndex] = {
        ...newArtifactMetas[currentArtifactIndex],
        year: year,
      } as Artifact;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setArtifactQuarter: (quarter: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update quarter of artifact at current index.
      newArtifactMetas[currentArtifactIndex] = {
        ...newArtifactMetas[currentArtifactIndex],
        quarter: quarter,
      } as Artifact;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setArtifactText: (text: string) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update text of artifact at current index.
      newArtifactMetas[currentArtifactIndex] = {
        ...newArtifactMetas[currentArtifactIndex],
        text: text,
      } as Artifact;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },
}));

const useStateStore = createSelectors(useStateStoreBase);

export default useStateStore;
