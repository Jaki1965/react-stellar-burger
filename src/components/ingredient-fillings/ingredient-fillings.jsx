
import React from 'react';
import styles from './ingredient-fillings.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';


function IngredientFillings(props) {
  return (
    <div>
      <div className={styles.rolls}>
      <h2 className={`${styles.title} text text_type_main-medium mt-10 mb-6`}>Начинки</h2>
      <ul className={styles.fillings_list}>
        <li className={styles.fillings_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.fillings_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.fillings_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.fillings_list_item}>
          <IngredientCard />
        </li>
      </ul>
      </div>
    </div>
  
  );
}

export default IngredientFillings;