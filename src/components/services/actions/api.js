import {getIngredientsData} from '../../../utils/api';


export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

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


