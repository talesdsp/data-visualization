import { combineReducers } from "redux";
import { errorReducer } from "./error";
import { languagesReducer } from "./languages";
import { reposReducer } from "./repos";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
  languages: languagesReducer,
  error: errorReducer,
});

export default rootReducer;
