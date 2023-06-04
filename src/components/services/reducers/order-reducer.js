
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from '../actions/api';



const initialStateOrder = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  
};

export const getOrderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {...state, 
            orderRequest: true,
            orderFailed: false
          }
    }
    case GET_ORDER_SUCCESS: {
      return {...state, 
            orderNumber: action.order,
            orderRequest: false,
            orderFailed: false
            }
    }
     case GET_ORDER_FAILED: {
      return {...state, 
            orderNumber: null,
            orderRequest: false,
            orderFailed: true,
            }
    }
    default: {
      return state;
    }
  }
};