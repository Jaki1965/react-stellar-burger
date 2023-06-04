import {
  ITEM_OPEN,
  ITEM_CLOSE,
} from '../actions/burger-ingredients';


const initialStateItem = {
  ingredient: null,
};

export const itemReducer = (state = initialStateItem, action) => {
  switch (action.type) {
    case ITEM_OPEN: {
      return {
        ...state,
        ingredient: action.ingredient
      }
    }
    case ITEM_CLOSE: {
      return {
        ...state,
        ingredient: null
      }
    }
    default: {
      return state;
    }
  }
}

