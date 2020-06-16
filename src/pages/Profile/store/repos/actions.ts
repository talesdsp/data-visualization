import { action } from "typesafe-actions";
import { Repos, ReposTypes } from "./types";

export const ReposActions = {
  triggerLoading: () => action(ReposTypes.IS_LOADING),

  getAsyncData: (username: string) => action(ReposTypes.ASYNC_GET_DATA, { username }),

  setData: (data: Repos) => action(ReposTypes.SET_DATA, { data }),

  failedRequest: (error: Error) =>
    action(ReposTypes.FAILURE, { message: "Repos did not fetch the resource" }, undefined, error),
};
