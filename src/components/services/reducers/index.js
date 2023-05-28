import { combineReducers } from 'redux';
import { getDataReducer,  getOrderReducer} from './api';



export const rootReducer = combineReducers({
  data: getDataReducer,
  order: getOrderReducer
});