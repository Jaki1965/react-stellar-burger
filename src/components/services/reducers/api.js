
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED
} from '../actions/api';

const initialState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
  
};

export const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {...state, 
            dataRequest: true }
    }
    case GET_DATA_SUCCESS: {
      return {...state, 
            dataRequest: false,
            dataFailed: false,
            data: action.data
            }
    }
    
     case GET_DATA_FAILED: {
      return {...state, 
            dataRequest: false,
            dataFailed: true,
            }
    }

    default: {
      return state;
    }
  }
};