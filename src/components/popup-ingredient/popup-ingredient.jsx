
import styles from './popup-ingredient.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const PopupIngredient = ({info, onClose}) =>{


  return (
    <div className={styles.main}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента
        <CloseIcon type="primary" onClick={onClose}/>
      </h2>
      <img src={info.image_large} alt="Изображение ингредиента"></img>
      <span className={`${styles.subtitle} text text_type_main-medium`}>{info.name}</span>
      <ul className={styles.food}>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{info.calories}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.proteins}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.fat}</p>
        </li>
        <li className={styles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default PopupIngredient;



