import { combineReducers } from "redux";
import repositoriesReducer from './resporitoriesReducer';


const reducers = combineReducers({
  respositories: repositoriesReducer
});

export default reducers;