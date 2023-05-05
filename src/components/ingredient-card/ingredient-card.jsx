
import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import ProTypes from 'prop-types';
import styles from './ingredient-card.module.css';

const IngredientCard = (props) => {
  // console.log(props.data.image);
 

  return (
    <>
      <li className={styles.card}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={props.data.image} alt="" />
        <div className={styles.price}>
          <p className='text text_type_main-medium mr-2'>{props.data.price}</p>
          <CurrencyIcon type="primary"  />
        </div>
        <p className={`text text_type_main-default ${styles.text}`}>{props.data.name} </p>
      </li>
    </>
  );
}

export default IngredientCard;