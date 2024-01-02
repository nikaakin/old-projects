import axios from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        `https://api.npms.io/v2/search?q=${term}`
      );

      const names = data.results.map((res: any) => res.package.name);

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
