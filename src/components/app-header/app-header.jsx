
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader(props) {
  return (
    <nav className={styles.header}>
      <ul className={styles.headerlist}>
        <li className={`${styles.listelement} pl-5 pr-5`}>
          <div>
          <BurgerIcon type="primary"/>
          </div>
          <p className={`${styles.pharagraph} m-2`}>Конструктор</p>
        </li>
        <li className={`${styles.listelement} pl-5 pr-5`}>
          <div>
          <ListIcon type="secondary"/>
          </div>
          <p className={`${styles.pharagraph} m-2`}>Лента заказов</p>
        </li>
        <li className={styles.logopicture}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </li>
        <li className={`${styles.listelement} pl-5 pr-5`}>
          <div>
            <ProfileIcon type="secondary" />
          </div>
          <p className={`${styles.pharagraph} m-2`}>Личный кабинет</p>
        </li>
      </ul>      
    </nav>
  );
}

export default AppHeader;