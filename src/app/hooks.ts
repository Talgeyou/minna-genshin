import React, { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import firebase from "firebase";
import { getFirebase } from "../util/firebase";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export const useAuth = (initialValue: null | firebase.User) => {
  const [currentUser, setCurrentUser] = useState(
    initialValue as firebase.User | null
  );

  useEffect(() => {
    const firebaseInstance = getFirebase();
    if (firebaseInstance) {
      firebaseInstance
        .auth()
        .onAuthStateChanged((authUser: firebase.User | null) => {
          setCurrentUser(authUser ? authUser : null);
        });
    }
  }, []);

  return {
    currentUser,
    setCurrentUser,
  };
};
