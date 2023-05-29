
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';

const IngredientDetails = () =>{
  
  const ingredient = useSelector(store => store.item.ingredient);

  return (
   
    <div className={styles.main} onClick={e => e.stopPropagation()}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2> 
      <img src={ingredient.image_large} alt="Изображение ингредиента"></img>
      <span className={`${styles.subtitle} text text_type_main-medium`}>{ingredient.name}</span>
      <ul className={styles.food}>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

// IngredientDetails.propTypes = {info: PropTypes.object.isRequired};

export default IngredientDetails;
