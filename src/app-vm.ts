import StateModel from './models/state-model.tsx';
import React from 'react';
import { Artifact } from './models/artifact-meta-models.ts';

class AppVm {
  private state: StateModel;
  private setState: React.Dispatch<React.SetStateAction<StateModel>>;

  constructor(stateHook: [StateModel, React.Dispatch<React.SetStateAction<StateModel>>]) {
    [this.state, this.setState] = stateHook;
  }

  public getCurrentArtifactTitle(): string {
    return this.state.currentArtifactTitle;
  }

  public getArtifactNames(): string[] {
    return Object.keys(this.state.artifactMetas);
  }

  public changeCurrentArtifactTitle(newTitle: string): void {
    this.setState((prevState) => {
      return { ...prevState, currentArtifactTitle: newTitle };
    });
  }

  public createNewArtifact(): void {
    const newArtifact: Artifact = {
      title: 'New Artifact',
      subtitle: '',
      year: 0,
      quarter: 0,
      text: '',
      images: [],
      links: [],
      embeds: [],
    };

    this.setState((prevState) => {
      let newState = { ...prevState, currentArtifact: newArtifact.title };
      newState.artifactMetas[newArtifact.title] = newArtifact;
      return newState;
    });
  }
}

export default AppVm;
