/**
 * Action Types
 */

export enum ReposTypes {
  SET_DATA = "repos/set_data",
  FAILURE = "repos/failure",
  IS_LOADING = "repos/is_loading",
  ASYNC_GET_DATA = "repos/async_get_data",
}

/**
 * Data Types
 */

export interface Repo {
  name: string;
  fork: boolean;
  description: string | null;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export type Repos = Repo[];

/**
 * State Types
 */

export interface ReposState {
  readonly data: Repos;
  readonly isLoading: boolean;
}

/**
 * Dispatch
 */

export interface GetRepos {
  type: string;
  payload: { username: string };
}

export interface SetRepos {
  type: string;
  payload: ReposState;
}
