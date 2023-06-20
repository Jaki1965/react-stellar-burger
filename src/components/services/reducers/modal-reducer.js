import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '../actions/burger-ingredients';

const initialStateModal = {
  isOpen: false,
};

export const madalReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        isOpen: true
      }
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        isOpen: false
      }
    }
    default: {
      return state;
    }
  }
}