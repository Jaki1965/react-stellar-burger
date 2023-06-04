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
*  Устранено замечание ревьюера - "Контекст больше не нужен - его можно удалить". Удалено (commit 83)
