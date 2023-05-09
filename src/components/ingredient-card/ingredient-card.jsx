
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import { ingredientPropType } from "../../utils/prop-types";


const IngredientCard = (props) => {

  const data = props.data;

  return (
    <>
      <li className={styles.card}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={props.data.image} alt={`${data.name}`}/>
        <div className={styles.price}>
          <p className='text text_type_main-medium mr-2'>{data.price}</p>
          <CurrencyIcon type="primary"  />
        </div>
        <p className={`text text_type_main-default ${styles.text}`}>{data.name} </p>
      </li>
    </>
  );
}

IngredientCard.propTypes = {data: ingredientPropType.isRequired};

export default IngredientCard;