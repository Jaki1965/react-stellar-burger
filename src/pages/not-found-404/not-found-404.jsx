
import React from 'react';
import styles from './not-found-404.module.css'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from "react-router-dom";

function NotFound404() {
  
  const navigate = useNavigate();

  function goToHome(){
    navigate('/', {replace: true})
  }

  return (
    <>
      <div className={styles.not_found}>
        <p className={styles.not_found_text}>ОШИБКА ЗАГРУЗКИ 404</p>
        <p className={styles.not_found_text_description}>Страница не найдена</p>
        <div className={styles.not_found_button}>
          <Button htmlType="button" type="primary" size="large" onClick={goToHome}>НА ГЛАВНУЮ</Button>
        </div>
      </div>
    </>
    
  );
}

export default NotFound404;