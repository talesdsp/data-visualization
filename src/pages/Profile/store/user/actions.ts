import { action } from "typesafe-actions";
import { User, UserTypes } from "./types";

export const UserActions = {
  triggerLoading: () => action(UserTypes.IS_LOADING),

  getAsyncData: (username: string) => action(UserTypes.ASYNC_GET_DATA, { username }),

  setData: (data: User) => action(UserTypes.SET_DATA, { data }),

  failedRequest: (error: Error) =>
    action(UserTypes.FAILURE, { message: "User did not fetch the resource" }, undefined, error),
};
