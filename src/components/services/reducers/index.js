import { combineReducers } from 'redux';
import { getDataReducer,  getOrderReducer} from './api';
import { itemReducer, madalReducer} from './burger-ingredients';
import { ingredientMoveReducer} from './burger-constructor';

export const rootReducer = combineReducers({
  data: getDataReducer,  // запрос данных ингредиентов с сервера
  order: getOrderReducer, // запоос заказа с сервера
  item: itemReducer, // открытие модального окна с ингредиентом
  open: madalReducer, // открытие модального окана с заказщь
  ingredients: ingredientMoveReducer, // работа конструктора: перемещение инградиента в конструктор, сортировка инградиентов в конструкторе

});