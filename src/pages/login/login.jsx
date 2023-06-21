
import styles from './login.module.css';
import {Link} from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';

function Login() {
 
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);
  const [password, setPassword] = useState('');


  return (
    <>
    <section className={styles.login}>
        <form className={styles.login_form}>
            <h2 className="text text_type_main-medium">Вход</h2>
            <Input
                type={'email'}
                placeholder={'E-mail'}
                onChange={e => setEmail(e.target.value)}
                value={email}
                name={'email'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
            />
            <PasswordInput
                onChange={e => setPassword(e.target.value)}
                value={password}
                name={'password'}
                placeholder={'Пароль'}
            />
            <Button htmlType="submit" type="primary" size="large" disabled={!email || !password}>Войти</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive pt-20">
            Вы - новый пользователь? <Link to="/register" className={styles.login_link}>Зарегистрироваться</Link>
        </span>
        <span className="text text_type_main-default text_color_inactive pt-4">
            Забыли пароль? <Link to="/forgot-password" className={styles.login_link}>Восстановить пароль</Link>
        </span>
    </section>
</>
  );
}

export default Login;