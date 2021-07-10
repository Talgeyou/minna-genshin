import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import artifactsReducer from "./artifactsSlice";
import authReducer from "./authSlice";
import myCharactersReducer from "./myCharactersSlice";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    artifacts: artifactsReducer,
    auth: authReducer,
    myCharacters: myCharactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
