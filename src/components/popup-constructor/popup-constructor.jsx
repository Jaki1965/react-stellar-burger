
import styles from './popup-constructor.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import checkIcon from "../../images/graphics.svg"


const PopupConstructor = ({onClose}) =>{


  return (
    <div>
      <ul className={styles.main}>
        <CloseIcon type="primary" onClick={onClose}/>
        <li className={styles.detail}>
          <p className={`${styles.number} text text_type_digits-large pb-5`}>034536</p>
          <p className="text text_type_main-medium pt-3">идентификатор заказа</p>
        </li>
        <li className={styles.detail}>
          <img src={checkIcon} alt='Иконка с галочкой'></img>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive pt-2">Дождитесь готовности на орбитальной станции</p>
        </li>
      </ul>
    </div>
  );
}

export default PopupConstructor;





