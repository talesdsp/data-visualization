import { Reducer } from "redux";
import { ReposState, ReposTypes, SetRepos } from "./types";

export const initialState: ReposState = {
  data: null,
  isLoading: false,
};

export const reposReducer: Reducer<ReposState, SetRepos> = (state = initialState, action) => {
  switch (action.type) {
    case ReposTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case ReposTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
