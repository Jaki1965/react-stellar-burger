
import styles from './order-details.module.css';
import checkIcon from "../../images/graphics.svg"
import React from 'react';
import {OrderContext} from '../services/main-context';

const OrderDetails = () =>{
  
  const orderNumber = React.useContext(OrderContext);

  return (
    <div onClick={e => e.stopPropagation()}>
      <ul className={styles.main}>
        <li className={styles.detail}>
          <p className={`${styles.number} text text_type_digits-large`}>{orderNumber}</p>
        </li>
        <li className={styles.order}>
          <p className="text text_type_main-medium">идентификатор заказа</p>
        </li>
        <li className={styles.image}>
          <img src={checkIcon} alt='Иконка с галочкой'></img>
        </li>
        <li className={styles.text}>
          <p className="text text_type_main-default">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive pt-2">Дождитесь готовности на орбитальной станции</p>
        </li>
      </ul>
    </div>
  );
}

export default OrderDetails;





