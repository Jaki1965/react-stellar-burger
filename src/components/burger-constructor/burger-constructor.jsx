import React from 'react';
import Modal from '../modal/modal';
import styles from './burger-constructor.module.css';
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from '../order-details/order-details';
import { getOrderNumber } from '../../utils/api';
import {OrderContext} from '../services/main-context';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../services/actions/api';
import { useEffect } from 'react';



const BurgerConstructor = () => {

  const {data} = useSelector(store => store.data);
  
  const dispatch = useDispatch();
  
  const [isPopupOpen, setIsPopupOpen] = React.useState(null);
  
  const orderIngridients = React.useMemo(() => data.map((i) => i._id), [data]);
  

  const onOpen = () => {
    setIsPopupOpen(!null);
    dispatch(getOrder(orderIngridients));
  }

  const onClose = () => {
    setIsPopupOpen(null)
  }


  const elementBurgerClosed = data.find(item => item.type === 'bun');
  const bunPrice = elementBurgerClosed && elementBurgerClosed.price;
  const elementBurger = data.filter(item => item.type !== 'bun');
  
  
  const finalPrice = React.useMemo(() => {
    const summPrice = elementBurger.reduce((sum, item) => { return sum + item.price}, bunPrice*2);
    return summPrice;
    }, [elementBurgerClosed, elementBurger]);
   
  return (
      <>
      { data.length && 
        <section className={` ${styles.box_constructor} pt-5 pl-4 pr-4`}>
            <div className={` ${styles.rolls} pb-5 pr-5`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${elementBurgerClosed.name} (верх)`}
                    price={elementBurgerClosed.price}
                    thumbnail={elementBurgerClosed.image}
                />
            </div>
            <div className={`custom-scroll ${styles.scrollbar}`}>
                <ul className={styles.list_constructor}>
                    {elementBurger.map((item) => (
                        <li className={styles.list_element} key={item._id}> 
                            <DragIcon type="primary" />
                            <ConstructorElement
                              text={item.name}
                              price={item.price}
                              thumbnail={item.image}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={` ${styles.rolls} pb-5 pr-5 pt-5`}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${elementBurgerClosed.name} (низ)`}
                  price={elementBurgerClosed.price}
                  thumbnail={elementBurgerClosed.image}
                />
            </div>
            <div className={`pt-10 pr-8 ${styles.order}`}>
                <div className={styles.order_price}>
                    <p className="text text_type_digits-medium pr-2">{finalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={onOpen}
                  htmlType="button" 
                  type="primary" 
                  size="large">Оформить заказ</Button>
            </div>
        </section>
         }
        {isPopupOpen && <Modal onClose={onClose}>
          <OrderDetails onClose={onClose}>
          </OrderDetails>
        </Modal>
        }
      </>
  )
}

export default BurgerConstructor
