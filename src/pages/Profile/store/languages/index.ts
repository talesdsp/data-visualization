import { Reducer } from "redux";
import { LanguagesState, LanguagesTypes, SetLanguages } from "./types";

export const initialState: LanguagesState = {
  data: null,
  isLoading: false,
};

export const languagesReducer: Reducer<LanguagesState, SetLanguages> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LanguagesTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case LanguagesTypes.IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
