
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import {Routes, Route, Link} from 'react-router-dom';




function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_list}>
          <li className={`${styles.list_element} pl-5 pr-5`}>
          <Link to='/' className={styles.menu_point}>
            <BurgerIcon type="primary"/>
            <p className="text text_type_main-default m-2">Конструктор</p>
          </Link>
          </li>
          <li className={`${styles.list_element} pl-5 pr-5`}>
            <Link to='/login'  className={styles.menu_point}>
              <ListIcon type="secondary"/>
              <p className={`${styles.list_element_text} text text_type_main-default text_color_inactive m-2`}>Лента заказов</p>
            </Link>
          </li>
          <li className={`${styles.logopicture} pt-1`}>
            <Logo />
          </li>
          <li className={`${styles.list_element} pl-5 pr-5`}>
            <Link to='/login' className={styles.menu_point}>
              <ProfileIcon type="secondary" />
              <p  className = {`${styles.list_element_text} text text_type_main-default text_color_inactive m-2`}>Личный кабинет</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default AppHeader;