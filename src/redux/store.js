import { configureStore } from "@reduxjs/toolkit";
import {manageDataReducer, manageToast} from "./reducers";

const store = configureStore({
  reducer: {
    // You are free to call the LHS what you like, but it must have a reducer on the RHS.
    user: manageDataReducer,
    toast: manageToast
  },
});

export default store;