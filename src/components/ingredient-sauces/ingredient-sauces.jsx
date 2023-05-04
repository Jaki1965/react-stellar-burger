
import React from 'react';
import styles from './ingredient-sauces.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';


function IngredientSauces(props) {
  return (
    <div className={styles.sauces}>
      <h2 className={`${styles.title} text text_type_main-medium mt-10 mb-6`}>Соусы</h2>
      <ul className={styles.sauces_list}>
        <li className={styles.sauces_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.sauces_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.sauces_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.sauces_list_item}>
          <IngredientCard />
        </li>
      </ul>
    </div>
   
  );
}

export default IngredientSauces;