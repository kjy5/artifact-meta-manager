import StoreModel from '../models/store-model.tsx';
import { create } from 'zustand';
import createSelectors from './create-selectors.ts';
import { ArtifactMetas, createBlankArtifact } from '../models/artifact-meta-models.ts';

const useStateStoreBase = create<StoreModel>()((set, get) => ({
  // Default default state.
  currentArtifactIndex: -1,
  currentArtifactImagesRoot: '',
  isCreatingNewArtifact: false,
  artifactMetas: [],

  // Implement actions.
  uploadArtifactMetas: (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const artifactMetas = JSON.parse(event.target?.result as string) as ArtifactMetas;
      set({ artifactMetas });
    };
    reader.onerror = (event) => {
      console.error('Error reading file. Please try again.');
      console.error(event);
    };
    reader.readAsText(file);
  },

  downloadArtifactMetas: () => {
    const blob = new Blob([JSON.stringify(get().artifactMetas)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'artifact-metas.json';
    link.click();
  },

  setCurrentArtifactIndex: (currentArtifactIndex: number) => {
    set({ currentArtifactIndex });
  },

  setCurrentArtifactImagesRoot: (currentArtifactImagesRoot: string) => {
    set({ currentArtifactImagesRoot });
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

  deleteCurrentArtifact: () => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Remove artifact at current index.
      newArtifactMetas.splice(currentArtifactIndex, 1);

      // Update state.
      return {
        currentArtifactIndex: -1,
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
      newArtifactMetas[currentArtifactIndex] = { ...newArtifactMetas[currentArtifactIndex], title };

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
        subtitle,
      };

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
        year,
      };

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
        quarter,
      };

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
        text,
      };

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },
}));

const useStateStore = createSelectors(useStateStoreBase);

export default useStateStore;
