import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Weapon = {
  name: string;
  rarity: number;
  level: number;
  stats: {
    main: {
      type: string;
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Artifact = {
  name: string;
  set: string | null;
  stats: {
    main: {
      type: string;
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Flower = Artifact & {
  stats: {
    main: {
      type: "HP";
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Plume = Artifact & {
  stats: {
    main: {
      type: "ATK";
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Sands = Artifact & {
  stats: {
    main: {
      type: "HP%" | "ATK%" | "DEF%" | "Elemental Mastery" | "Energy Recharge%";
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Goblet = Artifact & {
  stats: {
    main: {
      type:
        | "HP%"
        | "ATK%"
        | "DEF%"
        | "Elemental Mastery"
        | "Physical DMG Bonus%"
        | "Pyro DMG Bonus%"
        | "Hydro DMG Bonus%"
        | "Electro DMG Bonus%"
        | "Anemo DMG Bonus%"
        | "Cryo DMG Bonus%"
        | "Geo DMG Bonus%";
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Circlet = Artifact & {
  stats: {
    main: {
      type:
        | "HP%"
        | "ATK%"
        | "DEF%"
        | "Elemental Mastery"
        | "Crit Rate%"
        | "Crit DMG%"
        | "Healing Bonus%";
      value: number;
    } | null;
    sub: {
      type: string;
      value: number;
    } | null;
  };
};

export type Character = {
  id: number;
  name: string;
  level: number;
  weapon: Weapon | null;
  artifacts: {
    flower: Flower | null;
    plume: Plume | null;
    sands: Sands | null;
    goblet: Goblet | null;
    circlet: Circlet | null;
  };
  constellation: number;
  talents: {
    normalAttack: number;
    elementalSkill: number;
    elementalBurst: number;
  };
};

type MyCharactersState = {
  items: Array<Character>;
};

const initialState: MyCharactersState = {
  items: [],
};

export const myCharactersSlice = createSlice({
  name: "myCharacters",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMyCharacter: (state, action: PayloadAction<Character>) => {
      debugger;
      state.items.push(action.payload);
    },
    deleteMyCharacter: (state, action: PayloadAction<Character>) => {
      state.items = state.items.filter(
        (character: Character) => character.id !== action.payload.id
      );
    },
    changeMyCharacterName: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      state.items[action.payload.id].name = action.payload.name;
    },
    changeMyCharacterLevel: (
      state,
      action: PayloadAction<{ id: number; level: number }>
    ) => {
      state.items[action.payload.id].level = action.payload.level;
    },
  },
});

export const {
  addMyCharacter,
  deleteMyCharacter,
  changeMyCharacterName,
  changeMyCharacterLevel,
} = myCharactersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMyCharacters = (state: RootState): Array<Character> =>
  state.myCharacters.items;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default myCharactersSlice.reducer;
