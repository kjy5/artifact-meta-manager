import StoreModel from '../models/store-model.tsx';
import { create } from 'zustand';
import createSelectors from './create-selectors.ts';
import { ArtifactMetas, Quarter, Year } from '../models/artifact-meta-models.ts';

const useStateStoreBase = create<StoreModel>()((set, get) => ({
  // Default default state.
  currentArtifactIndex: -1,
  allAssetPaths: [],
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

  setAllAssetPaths: (allAssetPaths: string[]) => {
    set({ allAssetPaths });
  },

  createNewArtifact: () => {
    set((state) => {
      const { artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Create new blank entry.
      newArtifactMetas.push({
        title: '',
        subtitle: '',
        year: Year.None,
        quarter: Quarter.None,
        text: '',
        images: [],
        links: [],
        embeds: [],
      });

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

  createNewImage: () => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Create new blank image.
      newArtifactMetas[currentArtifactIndex].images.push({
        name: '',
        description: '',
        width: 0,
        height: 0,
        src: '',
        thumbnailSrc: '',
      });

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  deleteImage: (index: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Remove image at index.
      newArtifactMetas[currentArtifactIndex].images.splice(index, 1);

      // Update state.
      return {
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

  setImageSrc: (index: number, src: string) => {
    // Search for image src in all asset paths.
    const allAssetPaths = get().allAssetPaths;
    const assetPath = allAssetPaths.find((path) => path.endsWith(src));

    // Shortcut exit if not found.
    if (!assetPath) {
      return;
    }

    // Update state.
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update src of image at index of current artifact.
      newArtifactMetas[currentArtifactIndex].images[index].src = assetPath;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setImageThumbnailSrc: (index: number, src: string) => {
    // Search for image src in all asset paths.
    const allAssetPaths = get().allAssetPaths;
    const assetPath = allAssetPaths.find((path) => path.endsWith(src));

    // Shortcut exit if not found.
    if (!assetPath) {
      return;
    }

    // Update state.
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update thumbnail src of image at index of current artifact.
      newArtifactMetas[currentArtifactIndex].images[index].thumbnailSrc = assetPath;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setImageWidth: (index: number, width: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update width of image at index of current artifact.
      newArtifactMetas[currentArtifactIndex].images[index].width = width;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },

  setImageHeight: (index: number, height: number) => {
    set((state) => {
      const { currentArtifactIndex, artifactMetas } = state;

      // Create copy of artifact metas
      const newArtifactMetas = [...artifactMetas];

      // Update height of image at index of current artifact.
      newArtifactMetas[currentArtifactIndex].images[index].height = height;

      // Update state.
      return {
        artifactMetas: newArtifactMetas,
      };
    });
  },
}));

const useStateStore = createSelectors(useStateStoreBase);

export default useStateStore;
