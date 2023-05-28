
import {getIngredientsData} from '../../../utils/api';
import {getOrderNumber} from '../../../utils/api';


export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';


export function getBurgerData(){
  return function (dispatch){
    dispatch({
      type: GET_DATA_REQUEST
    })
  getIngredientsData().then(res => {if (res && res.success) {
       dispatch({
          type: GET_DATA_SUCCESS,
          data: res.data
        })
  } else {
       dispatch({
          type: GET_DATA_FAILED
        })
      }
  })
}
}


export function getOrder(arr){
  return function (dispatch){
    dispatch({
      type: GET_ORDER_REQUEST
    })
    getOrderNumber(arr).then(res => {if (res && res.success) {
       dispatch({
          type: GET_ORDER_SUCCESS,
          order: res
        })
  } else {
       dispatch({
          type: GET_ORDER_FAILED
        })
      }
  })
}
}