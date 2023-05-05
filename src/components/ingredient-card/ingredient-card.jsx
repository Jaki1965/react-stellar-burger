
import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import ProTypes from 'prop-types';
import styles from './ingredient-card.module.css';

const IngredientCard = (props) => {
  // console.log(props.data.price);
 

  return (
    <>
      <li className={styles.card}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
        <div className={styles.price}>
          <p className='text text_type_main-medium mr-2'>40</p>
          <CurrencyIcon type="primary"  />
        </div>
      </li>
    </>
  );
}

export default IngredientCard;