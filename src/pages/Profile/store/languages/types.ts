/**
 * Action Types
 */

export enum LanguagesTypes {
  SET_DATA = "languages/set_data",
  FAILURE = "languages/failure",
  IS_LOADING = "languages/is_loading",
  ASYNC_GET_DATA = "languages/async_get_data",
}

/**
 * Data Types
 */

export type Languages = Language[];

interface Language {
  id: string;
  label: string;
  value: number;
}

/**
 * State Types
 */

export interface LanguagesState {
  readonly data: Languages;
  readonly isLoading: boolean;
}

/**
 * Dispatch
 */

export interface GetLanguages {
  type: string;
  payload: { username: string; repo: string };
}

export interface SetLanguages {
  type: string;
  payload: LanguagesState;
}
