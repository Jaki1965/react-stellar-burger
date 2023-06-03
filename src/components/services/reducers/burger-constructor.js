
import {
  ELEMENT_SORT
} from '../actions/burger-constructor';


const initialStateSort = {
 element: [], 

};

export const ingredientStoreReducer = (state = initialStateSort, action) => {
  switch (action.type) {
    case ELEMENT_SORT: {
      return {
        ...state,
       
        }
      }

      default: {
        return state;
      }
    }
}