import {ActionType} from '../actiontypes';
import {Action} from '../actions';


interface ResporitoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
};



const initialState = {
  loading: false,
  error: null,
  data: [],
}


const reducer = (state: ResporitoriesState = initialState, action: Action): ResporitoriesState => {
  switch (action.type) {
    case  ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: []};
    case  ActionType.SEARCH_REPOSITORIES_sUCCESS:
      return { loading: false, error: null, data: action.payload};
    case  ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default: 
      return state;
  }
};

export default reducer;