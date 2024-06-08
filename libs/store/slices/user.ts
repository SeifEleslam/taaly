import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IdTokenResult, User } from "firebase/auth";

// Define a type for the slice state
export interface StoredUser {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}
// Define the initial state using that type
const initialState: {
  data: StoredUser | null | undefined;
} = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<StoredUser | null | undefined>) => {
      state.data = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

// export const selectUser = (state: RootState) => state.users;

export default userSlice.reducer;
