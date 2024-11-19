import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  initialState: false,
  name: "navbarSlice",
  reducers: {
    changeState: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { changeState } = navbarSlice.actions;
export default navbarSlice.reducer;
