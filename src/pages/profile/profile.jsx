import styles from './profile.module.css';
import {Link} from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'


function Profile() {

    const inputRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
      <>
        <section className={styles.profile}>
          <nav className={styles.profile_menu}>
            <NavLink
              to={'/profile'}
              className={({ isActive }) => isActive ? `${styles.profile_link} text text_type_main-medium ${styles.profile_link_active}` :
                  `${styles.profile_link} text text_type_main-medium text_color_inactive`}>
              Профиль
            </NavLink>
            <NavLink
              to={'/profile/orders'}
              className={({ isActive }) => isActive ? `${styles.profile_link} text text_type_main-medium ${styles.profile_link_active}` :
                  `${styles.profile_link} text text_type_main-medium text_color_inactive`}>
              История заказов
            </NavLink>
            <NavLink
              to={'/logout'}
              className={({ isActive }) => isActive ? `${styles.profile_link} text text_type_main-medium ${styles.profile_link_active}` :
                  `${styles.profile_link} text text_type_main-medium text_color_inactive`}>
              Выход
            </NavLink>
            <span className="text text_type_main-small text_color_inactive pt-20">
              В этом разделе вы можете<br /> изменить свои персональные данные
            </span>
          </nav>
          <form className={styles.profile_form}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={e => setName(e.target.value)}
              value={name}
              name={'name'}
              error={false}
              ref={inputRef}
              errorText={'Ошибка'}
              icon="EditIcon"
            />
            <Input
              type={'email'}
              placeholder={'Логин'}
              onChange={e => setEmail(e.target.value)}
              value={email}
              name={'email'}
              error={false}
              ref={inputRef}
              errorText={'Ошибка'}
              icon="EditIcon"
            />
            <PasswordInput
              onChange={e => setPassword(e.target.value)}
              value={password}
              name={'password'}
              placeholder={'Пароль'}
              icon="EditIcon"
            />
          </form>
        </section>
      </>
    )
}




export default Profile;