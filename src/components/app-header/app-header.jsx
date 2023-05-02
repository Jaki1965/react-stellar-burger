import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader(props) {
  return (
    <div>
      <BurgerIcon type="primary"/>
      <p>Конструктор</p>
      <ListIcon type="secondary" />
      <p>Лента заказов</p>
      <Logo />
      <ProfileIcon type="secondary" />
      <p>Личный кабинет</p>
    </div>
  );
}

export default AppHeader;