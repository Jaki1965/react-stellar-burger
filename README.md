# Каноническая работа проекта Stellar Burger 
# Практика Redux и React DND
# month-8/step-2
# Устранение замечаний ревьюера 
* Устранено замечание ревьюера - "В массив айдишников запроса на оформление заказа попадают не те ингредиенты, которые были добавлены в конструктор". Перенаправлен запрос на получение данных с сервера. Изменена переменная orderIngridients в BurgerConstructor, являющаяся аргументом запроса заказа
  
  const allElements = ingredients.map(element => element);
  if(buns!==null){allElements.push(buns)};
  
  const orderIngridients = React.useMemo(() => allElements.map((i) => {if(allElements.length){return i._id}
    }), [allElements]);
    
    (commit 82)
* Устранено замечание ревьюера - "Контекст больше не нужен - его можно удалить". Удалено (commit 83)
* Устранено замечание ревьюера - "со временем приложение будет разрастаться, появится новый функционал, если все будет в одном рельюсере он станет слишком большим, разделите один большой редьюсер на несколько, обрабатывающие данные одной предметной области (одного "домена"), например:

загрузка данных ингредиентов
отправка заказа
работа конструктора
открытие модального окна ингредиента".

Редъюсеры разделены и собраны в src/components/srvices/reducers/index.js

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

});
(commit 84)
* Созданы раздельные директории под разные редьюсеры (commit 85)