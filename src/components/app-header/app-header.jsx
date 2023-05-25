
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_list}>
          <li className={`${styles.list_lement} pl-5 pr-5`}>
            <BurgerIcon type="primary"/>
            <p className="text text_type_main-default m-2">Конструктор</p>
          </li>
          <li className={`${styles.list_lement} pl-5 pr-5`}>
            <ListIcon type="secondary"/>
            <p className="text text_type_main-default text_color_inactive m-2">Лента заказов</p>
          </li>
          <li className={`${styles.logopicture} pt-1`}>
            <Logo />
          </li>
          <li className={`${styles.list_lement} pl-5 pr-5`}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive m-2">Личный кабинет</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;