import { compose } from "redux";
import { ErrorState } from "./error/types";
import { LanguagesState } from "./languages/types";
import { ReposState } from "./repos/types";
import { UserState } from "./user/types";

export interface ApplicationState {
  user: UserState;
  repos: ReposState;
  languages: LanguagesState;
  error: ErrorState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
