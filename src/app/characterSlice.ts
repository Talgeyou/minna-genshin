import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  baseAttack: 800,
  bonusAttack: 0,
  critRate: 5,
  critDamage: 50,
  elementalBonus: 0,
  physicalBonus: 0,
  elementalDamageProportion: 50,
};

export type CharacterState = typeof initialState;

export const characterSlice = createSlice({
  name: "character",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCharacterBaseAttack: (state, action: PayloadAction<number>) => {
      state.baseAttack = action.payload;
    },
    setCharacterBonusAttack: (state, action: PayloadAction<number>) => {
      state.bonusAttack = action.payload;
    },
    setCharacterCritRate: (state, action: PayloadAction<number>) => {
      state.critRate = action.payload;
    },
    setCharacterCritDamage: (state, action: PayloadAction<number>) => {
      state.critDamage = action.payload;
    },
    setCharacterElementalBonus: (state, action: PayloadAction<number>) => {
      state.elementalBonus = action.payload;
    },
    setCharacterPhysicalBonus: (state, action: PayloadAction<number>) => {
      state.physicalBonus = action.payload;
    },
    setCharacterElementalDamageProportion: (
      state,
      action: PayloadAction<number>
    ) => {
      state.elementalDamageProportion = action.payload;
    },
  },
});

export const {
  setCharacterBaseAttack,
  setCharacterBonusAttack,
  setCharacterCritRate,
  setCharacterCritDamage,
  setCharacterElementalBonus,
  setCharacterPhysicalBonus,
  setCharacterElementalDamageProportion,
} = characterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCharacterBaseAttack = (state: RootState): number =>
  state.character.baseAttack;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default characterSlice.reducer;
