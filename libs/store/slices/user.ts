import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IdTokenResult, User } from "firebase/auth";

// Define a type for the slice state

// Define the initial state using that type
const initialState: {
  data: {
    name: string | null;
    email: string | null;
    image: string | null;
  } | null;
} = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User | null | undefined>) => {
      state.data = action.payload
        ? {
            email: action.payload.email,
            name: action.payload.displayName,
            image: action.payload.photoURL,
          }
        : null;
    },
  },
});

export const { set } = userSlice.actions;

// export const selectUser = (state: RootState) => state.users;

export default userSlice.reducer;
