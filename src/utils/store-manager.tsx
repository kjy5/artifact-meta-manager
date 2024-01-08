import StoreModel from '../models/store-model.tsx';
import { create } from 'zustand';
import createSelectors from './create-selectors.ts';

const useStateStoreBase = create<StoreModel>()((set) => ({
  // Default default state.
  currentArtifactTitle: '',
  isCreatingNewArtifact: false,
  artifactMetas: {},

  // Implement actions.
  setCurrentArtifactTitle: (currentArtifactTitle: string) => {
    set({ currentArtifactTitle });
  },

  setIsCreatingNewArtifact: (isCreatingNewArtifact: boolean) => {
    set({ isCreatingNewArtifact });
  },
}));

const useStateStore = createSelectors(useStateStoreBase);

export default useStateStore;
