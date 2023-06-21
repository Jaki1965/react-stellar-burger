import styles from './forgot-password.module.css';
import {Link} from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';

  
  function ForgotPassword() {
  
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const inputRef = useRef(null);

    return (
      <>
        <section className={styles.forgot_password}>
          <form className={styles.forgot_password_form}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <PasswordInput
                onChange={e => setPassword(e.target.value)}
                value={password}
                name={'password'}
                placeholder={'Введите новый пароль'}
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={e => setCode(e.target.value)}
                value={code}
                name={'securityCode'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
            />
            <Button htmlType="submit" type="primary" size="large" disabled={!code || !password}>Сохранить</Button>
          </form>
          <span className="text text_type_main-default text_color_inactive pt-20">
            Вспомнили пароль? <Link to="/login" className={styles.forgot_password_link}>Войти</Link>
          </span>
        </section>
      </>
    )
}
  
  export default ForgotPassword;

