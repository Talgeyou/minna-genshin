import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

import firebase from "firebase";

const initialState = {
  user: null as firebase.User | null,
};

export type AuthState = typeof initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state, action: PayloadAction<firebase.User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrentUser = (state: RootState): firebase.User | null =>
  state.auth.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default authSlice.reducer;
