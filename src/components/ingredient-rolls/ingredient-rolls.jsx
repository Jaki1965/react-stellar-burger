
import React from 'react';
import styles from './ingredient-rolls.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

function IngredientRolls(props) {
  return (
    <div>
      <div className={styles.rolls}>
      <h2 className={`${styles.title} text text_type_main-medium mt-10 mb-6`}>Булки</h2>
      <ul className={styles.rolls_list}>
        <li className={styles.rolls_list_item}>
          <IngredientCard />
        </li>
        <li className={styles.rolls_list_item}>
          <IngredientCard />
        </li>
      </ul>
    </div>
    </div>
  );
}

export default IngredientRolls;