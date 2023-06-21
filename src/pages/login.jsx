import React from 'react';
import styles from './login.module.css';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className={styles.login}>
      Я страница Login 
      На экране /login клик на «Зарегистрироваться» направляет пользователя на маршрут /register.
      Чтобы попасть сюда нужно кликнуть Личный кабинет
      <Link to='/'>
      <p>На домашнюю страницу</p>
      </Link>
      
      
    </div>
  );
}

export default Login;