import { ActionTypes } from "../action-types";

interface SearchRepository {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositorySuccess {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoryError {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepository
  | SearchRepositorySuccess
  | SearchRepositoryError;
