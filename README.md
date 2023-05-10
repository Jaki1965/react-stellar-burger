# Каноническая работа проекта Stellar Burger 
# Этап "Промежуточный проект. CRA-заготовка и структура папок под компоненты"

* Установлены пакеты npm
* Создан .gitignore
* Проверена функциональность ветки month-7/step-1
* Проверочный коммит (commit 1)
* Создана директория app-header, внутри котрой созданы два файла app-headre.jsx и app-header.module.css (commit 2)
* Сделана пробная верстка AppHeader (commit 6)
* Сверстан header - возможно, что-то придется поправить, но в целом с учетом расположения элементов и цвета background - все сделано (commit 7)
* Исправлена ошибка с отступами. Теперь отступы взяты из билиотеки //<li className={`${styles.listelement} pl-5 pr-5`}>// (commit 8)
* Исправлена ошибка в разметке header. Применены к шрифтам подписей сили из библиотеки. На всякий случай, орисовал обрамление пунктов меню навигации. (commit 9)
* Сверстаны заготовки блоков: BurgerIngradients и BurgerConstructor (commit 10)
* Подготовлены шаблоны: BurgerIngredients - все инградиенты по категориям, IngredientSauces - блок "Соусы", IngredientCard - карточка инградиента. (commit 11)
* ПРОМЕЖУТОЧНЫЙ КОММИТ (commit 12)
* Сверстан инастроен блок - BurgerIngradients. Коммит перед чисткой структуры. Очень много лишних компонентов и лишних импортов (commit 13)
* Сверстан полностью блок - BurgerIngradients. Почищена структура. Переходим к верстке BurgerConstrucor. (commit 14)
* Промежуточный коммит. (commit 15)
* Промежуточный коммит. (commit 16)
* Промежуточный коммит. (commit 17)
* Сверстан и настроен блок BurgerConstrucor. Почищены файлы стилей. Удалены лишние обертки div. (commit 18)
* Коммит перед ревью - 1, step - 1. (commit 20)
* Удалены ошибки консоли. Исправлен неверный PropTypes в IngredientCard (IngredientCard.propTypes = {data: ingredientPropType.isRequired};). Предстоит проставить key (ключи в углах каждой отрисовки). (commit 21)
* Исправлены ошибки согласно замечаний ревьюера. Коммит перед вторым ревью step-1. (commit 22)
* Исправлено замечание ревьюерва из-за неподвижности header возникает горизонтальный скролл. Ширина header теперь указана в процентах, ширина menu указана в процентах. Header двигается вместе с контентом, но когда мы доходим до ширины BurgerIngradients + BurgerConstrucor из-за того, что у них указаны согласно макета width: 600px; + width: 605px; горизонтальный скролл неизбежно возникает. Так как в задании нет требования адаптивности - медиа запросы писать не стал. Но замечание по поводу движения header - выполнил (устранил). (commit 23)
# Step - 2 Финальный проект. Написать весь JSX и сверстать
* Реализован загрузка данных с сервера. Реализована оработка ошибок обращения к серверу. (commit 24)
* Промежуточный коммит. (commit 25)
* Создан шаблон модального окна. Создан компонент PopupIngredient (пока без разметки). Созданы функции открытия и закрытия PopupIngredient. (commit 26)
* Реализована разметка и функционал модального окна PopupIngredient. Реализован функционал модального окна PopupConstructor (разметка не доделана). (commit 27)
* Переписана реализация закрытия overlay по клавише Escape на useEffect со сбросом. Осталось: 1. Сделать разметку PopupConstructor. 2. Проверка типов PropTypes в пропсах. (commit 28)
* Сделана разметка модального окна PopupConstructor. (commit 29)
* Реализована проверка типов PropTypes в пропсах. (commit 30)
* Последний коммит перед ревью - 1, step - 2. (commit 31)
* Устранена ошибка закрытия popup по клику на модальное окно (не заметил до отправки на ревью). (commit 32)