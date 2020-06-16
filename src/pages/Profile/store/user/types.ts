/**
 * Action Types
 */

export enum UserTypes {
  SET_DATA = "user/set_data",
  FAILURE = "user/failure",
  IS_LOADING = "user/is_loading",
  ASYNC_GET_DATA = "user/async_get_data",
}

/**
 * Data Types
 */

export interface User {
  name: string;
  avatar_url: string;
  public_repos: number;
  html_url: string;
  gravatar_id: string;
  location: string | null;
  bio: string | null;
  blog: string | null;
}

/**
 * State Types
 */

export interface UserState {
  readonly data: User;
  readonly isLoading: boolean;
}

/**
 * Dispatch
 */

export interface GetUser {
  type: string;
  payload: { username: string };
}

export interface SetUser {
  type: string;
  payload: UserState;
}
