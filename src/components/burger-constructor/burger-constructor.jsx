import React from 'react';
import Modal from '../modal/modal';
import styles from './burger-constructor.module.css';
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from '../order-details/order-details';
// import { MainContext } from '../services/main-context';
import { getOrderNumber } from '../../utils/api';
import {OrderContext} from '../services/main-context';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBurgerData } from '../services/actions/api';

// const elementBurgerClosed = {
//   calories: 420,
//   carbohydrates: 53,
//   fat: 24,
//   image: "https://code.s3.yandex.net/react/code/bun-02.png",
//   image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
//   image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
//   name: "Краторная булка N-200i",
//   price: 1255,
//   proteins: 80,
//   type: "bun",
//   __v: 0,
//   _id: "643d69a5c3f7b9001cfa093c"
// }



const BurgerConstructor = () => {

// const data = React.useContext(MainContext);

// console.log(elementBurgerClosed);

const {data} = useSelector(store => store.data);
  
//   const dispatch = useDispatch();
 
//   useEffect(()=> {
//     dispatch(getBurgerData())
// }, [])
  
  
  
  const [isPopupOpen, setIsPopupOpen] = React.useState(null);
  const [order, setOrder] = React.useState("");

  const [isError, setIsError] = React.useState(false);

  const orderIngridients = React.useMemo(() => data.map((i) => i._id), [data]);
  
  function fetchDataOreder() {
    getOrderNumber(orderIngridients)
      .then((res) => {setOrder(res.order.number.toString())})
      .catch(() => {setIsError(true);})
     }

  const onOpen = () => {
    setIsPopupOpen(!null);
    fetchDataOreder();
  }

  const onClose = () => {
    setIsPopupOpen(null)
  }



  


  const elementBurgerClosed = data.find(item => item.type === 'bun');
  const bulkaPrice = elementBurgerClosed && elementBurgerClosed.price;
  console.log(bulkaPrice);
  
  const elementBurger = data.filter(item => item.type !== 'bun');
  

  // const finalPrice = elementBurger.reduce((sum, item) => { return sum + item.price},  bulkaPrice*2);
  // console.log(data);
  // console.log(elementBurgerClosed);

    
  //const finalPrice = 10500;

  
  const finalPrice = React.useMemo(() => {
    const summPrice = elementBurger.reduce((sum, item) => { return sum + item.price}, 0);
    return summPrice + bulkaPrice * 2;
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
      <OrderContext.Provider value = {order} >
      {isError ? <h2 className={styles.error}>Ошибка загрузки данных заказа с сервера</h2> :
        isPopupOpen && <Modal onClose={onClose}>
          <OrderDetails onClose={onClose}>
          </OrderDetails>
        </Modal>
        }
       </OrderContext.Provider>
      </>
  )
}

export default BurgerConstructor
