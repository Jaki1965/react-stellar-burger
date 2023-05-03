
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader(props) {
  return (
    <nav className={styles.header}>
      <ul className={styles.headerlist}>
        <li className={styles.listelement}>
          <div>
          <BurgerIcon type="primary"/>
          </div>
          <p className={styles.pharagraph}>Конструктор</p>
        </li>
        <li className={styles.listelement}>
          <div>
          <ListIcon type="secondary"/>
          </div>
          <p className={styles.pharagraph}>Лента заказов</p>
        </li>
        <li className={styles.logopicture}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </li>
        <li className={styles.listelement}>
          <div>
            <ProfileIcon type="secondary" />
          </div>
          <p className={styles.pharagraph}>Личный кабинет</p>
        </li>
      </ul>      
      
    </nav>
  );
}

export default AppHeader;