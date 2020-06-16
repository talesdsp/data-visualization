import { Reducer } from "redux";
import { SetUser, UserState, UserTypes } from "./types";

export const initialState: UserState = {
  data: {
    name: null,
    avatar_url: null,
    bio: null,
    blog: null,
    gravatar_id: null,
    html_url: null,
    location: null,
    public_repos: 0,
  },
  isLoading: false,
};

export const userReducer: Reducer<UserState, SetUser> = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case UserTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
