
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_list}>
          <li className={`${styles.liste_lement} pl-5 pr-5`}>
            <div>
            <BurgerIcon type="primary"/>
            </div>
            <p className="text text_type_main-default m-2">Конструктор</p>
          </li>
          <li className={`${styles.liste_lement} pl-5 pr-5`}>
            <div>
            <ListIcon type="secondary"/>
            </div>
            <p className="text text_type_main-default text_color_inactive m-2">Лента заказов</p>
          </li>
          <li className={styles.logopicture}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </li>
          <li className={`${styles.liste_lement} pl-5 pr-5`}>
            <div>
              <ProfileIcon type="secondary" />
            </div>
            <p className="text text_type_main-default text_color_inactive m-2">Личный кабинет</p>
          </li>
        </ul>      
      </nav>
    </header>
      
  );
}

export default AppHeader;