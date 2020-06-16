/**
 * Action Types
 */

import { AxiosError } from "axios";

/**
 * Data Types
 */

/**
 * State Types
 */

export interface ErrorState {
  message: string;
  error: AxiosError | null;
}
/**
 * Dispatch
 */

export interface SetError {
  type: string;
  payload: ErrorState;
  error: AxiosError;
}
