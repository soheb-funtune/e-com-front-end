import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import services from "./HomeServices";

const initialState = {
  value: 0,
  user: null,
  isError: false,
  errorMsg: "",
  allItems: null,
  reduxsetup: null,
  error: "",
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
          title: "",
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
      localStorage.setItem("token", action.payload?.token);
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload || {};
    },
    reduxSetup: (state, action) => {
      state.reduxsetup = action.payload || {};
    },
    setAllItems: (state, action) => {
      state.allItems = action.payload || [];
    },
    error: (state, action) => {
      state.error = action.payload || "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  setError,
  userData,
  incrementByAmount,
  reduxSetup,
  setAllItems,
  error,
} = homeSlice.actions;

export default homeSlice.reducer;

const actionStructure = async (
  dispatch,
  onSuccess,
  onError,
  api,
  payload,
  specifyError,
  overrideMsg
) => {
  const {
    data,
    errors,
    message,
    success,
    errorSpecific,
    overrideMsg: msg,
  } = await api(payload);

  if (overrideMsg && msg) {
    dispatch(overrideMsg(msg));
  }
  if (data?.data || success) {
    dispatch(onSuccess(data?.data || message));
    dispatch(onError(""));
  } else {
    specifyError && errorSpecific && dispatch(specifyError(errorSpecific));
    dispatch(onError(errors || message));
    console.error("Error", errors || message);
  }
};

export const LoginUser = (loginData) => {
  return async (dispatch) => {
    try {
      // actionStructure(dispatch, userData, error, services.login, data);
      const { success, data, errors, message } = await services.login(
        loginData
      );
      if (data?.data || success) {
        dispatch(userData(data?.data || message));
      } else {
        dispatch(error(errors || message));
      }
    } catch (err) {
      dispatch(error("Something went wrong"));
      console.error("Error", err);
    }
  };
};

export const getItems = () => {
  return async (dispatch) => {
    try {
      actionStructure(dispatch, setAllItems, error, services.getAllItemApi);
    } catch (err) {
      dispatch(error("Something went wrong"));
      console.error("Error", err);
    }
  };
};
