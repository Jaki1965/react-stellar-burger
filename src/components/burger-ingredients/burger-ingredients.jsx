
import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-ingredients.module.css';
import IngredientSauces from '../ingredient-sauces/ingredient-sauces';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('rolls')

  return (
    <div className={styles.box_ingredients}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.menu}>
          <Tab value='rolls' active={current === 'rolls'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <IngredientSauces />
    </div>

    
  );
}

export default BurgerIngredients;