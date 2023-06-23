
import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import {NavLink, useMatch} from 'react-router-dom';




function AppHeader() {
  const classStyles = ({isActive}) => isActive ? `${styles.menu_point_active}` : `${styles.menu_point}`;
  const home = useMatch('/');
  const listOrders = useMatch('/profile/orders');
  const login = useMatch('/login');

  
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_list}>
          <li className={`${styles.list_element} pl-5 pr-5`}>
          <NavLink to='/' className={classStyles}>
            <BurgerIcon type={home ? "primary" : "secondary" } />
            <p className="text text_type_main-default m-2">Конструктор</p>
          </NavLink>
          </li>
          <li className={`${styles.list_element} pl-5 pr-5`}>
            <NavLink to='/profile/orders'  className={classStyles}>
              <ListIcon type={listOrders ? "primary" : "secondary" }/>
              <p className= "text text_type_main-default m-2">Лента заказов</p>
            </NavLink>
          </li>
          <li className={`${styles.logopicture} pt-1`}>
            <Logo />
          </li>
          <li className={`${styles.list_element} pl-5 pr-5`}>
            <NavLink to='/login' className={classStyles}>
              <ProfileIcon type={login ? "primary" : "secondary" } />
              <p  className = "text text_type_main-default m-2">Личный кабинет</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;