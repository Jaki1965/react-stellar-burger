
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import {useDrag} from 'react-dnd';


const IngredientCard = ({item, onOpen}) => {
  

  const [ , dragRef] = useDrag({
    type: 'ingredients',
    item: item
  
  });



  return (
    <>
      <li ref={dragRef} className={styles.card} onClick={() => onOpen(item)}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={item.image} alt={`${item.name}`}/>
        <div className={styles.price}>
          <p className='text text_type_main-medium mr-2'>{item.price}</p>
          <CurrencyIcon type="primary"  />
        </div>
        <p className={`text text_type_main-default ${styles.text}`}>{item.name} </p>
      </li>
    </>
  );
}

IngredientCard.propTypes = {onOpen: PropTypes.func.isRequired};

export default IngredientCard;