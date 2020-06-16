import { Reducer } from "react";
import { ErrorState, SetError } from "./types";

const initialState: ErrorState = {
  message: "Everything looks fine",
  error: null,
};

export const errorReducer: Reducer<ErrorState, SetError> = (state = initialState, action) => {
  if (action.type.match(/failure/g)) {
    console.log(action);
    return { message: action.payload.message, error: action.error };
  }
  return state;
};
