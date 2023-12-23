import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  value: 0,
  user: null,
  isError: false,
  errorMsg: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setError: (state, action) => {
      console.log("action.payload", action.payload);
      if (action?.payload?.isError) {
        Swal.fire({
          toast: true,
          position: "top-end",
          title: "Error!",
          text: action?.payload?.errorMsg || "Do you want to continue",
          icon: "error",
        }).then((res) => {
          if (res) {
            state.isError = false;
            state.errorMsg = "";
            window.location.reload();
          }
        });
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    userData: (state, action) => {
      state.user = action.payload || {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setError, userData, incrementByAmount } =
  homeSlice.actions;

export default homeSlice.reducer;
