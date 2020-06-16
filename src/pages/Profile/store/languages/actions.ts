import { action } from "typesafe-actions";
import { Languages, LanguagesTypes } from "./types";

export const LanguagesActions = {
  triggerLoading: () => action(LanguagesTypes.IS_LOADING),

  getAsyncData: (username: string, repo: string) =>
    action(LanguagesTypes.ASYNC_GET_DATA, { username, repo }),

  setData: (data: Languages) => action(LanguagesTypes.SET_DATA, { data }),

  failedRequest: (error: Error) =>
    action(
      LanguagesTypes.FAILURE,
      { message: "Languages did not fetch the resource" },
      undefined,
      error
    ),
};
