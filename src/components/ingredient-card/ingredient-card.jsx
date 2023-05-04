
import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';

function IngredientCard(props) {
  return (
    <div>
      <div className={styles.image}>
        <img src="https://code.s3.yandex.net/react/code/sauce-02.png"alt="" />
      </div>
      <div className={styles.price}>
        <div className='text text_type_digits-small'>
          20
        </div>
        <div className={styles.icon}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={`${styles.name} text text_type_main-small`}>
        "Соус Spicy-X"
      </div>
    </div>
  );
}

export default IngredientCard;