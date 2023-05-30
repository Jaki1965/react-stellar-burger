# Каноническая работа проекта Stellar Burger 
# Практика Redux и React DND
# month-8/step-2

* Создана ветка month-8/step-2 из ветки month-8/step-1 с целью сохранить созданные папки и часть кода. Первый коммит в этой ветке (commit 56)
* Промежуточный коммит - build и поставлена в gitignore (commit 58)
* Промежуточный коммит - build и поставлена в gitignore (commit 59)
* Созданы папки actions /для экшенов/ и reducers /для редъюсеров/ в папке services. Подключен redux-devtools-extension в в корневом /главном/ index.js
в  services/reducers/index.js создан корневой редьюсер. (commit 60)
* Промежуточный коммит (commit 61)
* Реализованы загрузка данных для конструктора и инградиентов через store - redux. Возможно позже придется, что-то переделать, но как основа работает. (commit 62)
* Промежуточный коммит (commit 63)
* Промежуточный коммит (commit 64)
* Промежуточный коммит (commit 65)
* Реализовна загрузка данных из хранилища redux в компоненты burger-ingaredients и burger-constructor. В консоли ошибок нет. Теперь задача рефактоинга на redux получение номеров заказа и рендеринг модального окна. (commit 66)
* Реализованы полностью следующие пункты задания №3:
- Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients,
- Получение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor,
- Получение и обновление номера заказа в модальном окне OrderDetails.
* ОСТАЛОСЬ: 
- Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте,
- Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна.
(commit 67)
* Промежуточный коммит (commit 68)
* Реализованы все задачи раздела три, в том числе:
- Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте,
- Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна. (commit 69)
* Реализовано задание 3 - ". Когда пользователь прокручивает ингредиенты в компоненте BurgerIngredients, подсвечивайте переключатель, заголовок которого ближе всего к верхней левой границе контейнера BurgerIngredients."
Реализация сделана на дополнительной библиотеке "react-intersection-observer" /установка npm install react-intersection-observer --save /. (commit 70)