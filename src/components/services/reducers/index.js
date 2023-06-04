import { combineReducers } from 'redux';
import { getDataReducer} from './data-reducer';
import { getOrderReducer} from './order-reducer';
import { itemReducer} from './item-reducer';
import { ingredientMoveReducer} from './burger-constructor';
import { madalReducer} from './modal-reducer';

export const rootReducer = combineReducers({
  data: getDataReducer,  // запрос данных ингредиентов с сервера
  order: getOrderReducer, // запоос заказа с сервера
  item: itemReducer, // открытие модального окна с ингредиентом
  open: madalReducer, // открытие модального окана с заказом
  ingredients: ingredientMoveReducer, // работа конструктора: перемещение инградиента в конструктор, сортировка инградиентов в конструкторе

});