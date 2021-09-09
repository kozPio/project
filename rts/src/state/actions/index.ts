import {ActionType} from '../actiontypes';


interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
};

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_sUCCESS;
  payload: string[];
};

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;