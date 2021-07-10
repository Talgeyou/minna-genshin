import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Artifact = {
  rawAttack: number;
  attackPercentage: number;
  critRate: number;
  critDamage: number;
  elementalBonus: number;
  physicalBonus: number;
  damageValue: number;
};

interface ArtifactsState {
  items: Array<Artifact>;
}

const initialState: ArtifactsState = {
  items: [
    {
      rawAttack: 0,
      attackPercentage: 0,
      critRate: 0,
      critDamage: 0,
      elementalBonus: 0,
      physicalBonus: 0,
      damageValue: 0,
    },
  ],
};

export const artifactsSlice = createSlice({
  name: "artifacts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDamageValue: (
      state,
      action: PayloadAction<{ id: number; damageValue: number }>
    ) => {
      state.items[action.payload.id].damageValue = action.payload.damageValue;
    },
    addArtifact: (state) => {
      state.items.push({ ...initialState.items[0] });
    },
    deleteArtifact: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    resetArtifacts: (state) => {
      state.items = initialState.items;
    },
    setArtifactRawAttack: (
      state,
      action: PayloadAction<{ id: number; rawAttack: number }>
    ) => {
      state.items[action.payload.id].rawAttack = action.payload.rawAttack;
    },
    setArtifactAttackPercentage: (
      state,
      action: PayloadAction<{ id: number; attackPercentage: number }>
    ) => {
      state.items[action.payload.id].attackPercentage =
        action.payload.attackPercentage;
    },
    setArtifactCritRate: (
      state,
      action: PayloadAction<{ id: number; critRate: number }>
    ) => {
      state.items[action.payload.id].critRate = action.payload.critRate;
    },
    setArtifactCritDamage: (
      state,
      action: PayloadAction<{ id: number; critDamage: number }>
    ) => {
      state.items[action.payload.id].critDamage = action.payload.critDamage;
    },
    setArtifactElementalBonus: (
      state,
      action: PayloadAction<{ id: number; elementalBonus: number }>
    ) => {
      state.items[action.payload.id].elementalBonus =
        action.payload.elementalBonus;
    },
    setArtifactPhysicalBonus: (
      state,
      action: PayloadAction<{ id: number; physicalBonus: number }>
    ) => {
      state.items[action.payload.id].physicalBonus =
        action.payload.physicalBonus;
    },
  },
});

export const {
  setDamageValue,
  addArtifact,
  deleteArtifact,
  resetArtifacts,
  setArtifactRawAttack,
  setArtifactAttackPercentage,
  setArtifactCritRate,
  setArtifactCritDamage,
  setArtifactElementalBonus,
  setArtifactPhysicalBonus,
} = artifactsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectArtifactBaseAttack = (state: RootState): number =>
//   state.Artifact.baseAttack;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default artifactsSlice.reducer;
