import React, {useCallback} from 'react';
import Modal from '../modal/modal';
import styles from './burger-constructor.module.css';
import { CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from '../order-details/order-details';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../services/actions/api';
import {BUN_MOVE, SAUCE_FILLING_MOVE,UPDATE_ARR_ELEMENTS} from '../services/actions/burger-constructor';
import {useDrop} from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Element } from '../element/element';


const BurgerConstructor = () => {
 
  const buns = useSelector(store => store.ingredients.bun);
  
  const ingredients = useSelector(store => store.ingredients.ingredients);
 

  
  
  const dispatch = useDispatch();
  
  const [isPopupOpen, setIsPopupOpen] = React.useState(null);

  const allElements = ingredients.map(element => element);
  if(buns!==null){allElements.push(buns)};
  
  const orderIngridients = React.useMemo(() => allElements.map((i) => {if(allElements.length){return i._id}
    }), [allElements]);

  const onDropHandler = (itemId) => {
    if(itemId.type === 'bun' ){ return dispatch({
      type: BUN_MOVE,
      bun: itemId
    }) }
    if(itemId.type === 'sauce' || 'main' ){ return dispatch({
      type: SAUCE_FILLING_MOVE,
      ingredients: itemId,
      id: uuidv4(),
    }) }
    }


const [, dropTarget] = useDrop({
  accept: 'ingredients',
  drop(itemId) {
      onDropHandler(itemId);
  },
});

  const onOpen = () => {
    setIsPopupOpen(!null);
    dispatch(getOrder(orderIngridients));
  }

  const onClose = () => {
    setIsPopupOpen(null)
  }
  
  const finalPrice = React.useMemo(() => {
    const summPrice = ingredients.reduce((sum, item) => { return sum + item.price}, 0);
    const summBuns = buns ? (buns.price*2) : 0;
    return summPrice + summBuns;
    }, [ingredients, buns]);



    const moveListItem = useCallback(
      (dragIndex, hoverIndex) => {
        dispatch({
          type: UPDATE_ARR_ELEMENTS,
          dragIndex: dragIndex,
          hoverIndex: hoverIndex,
        })

      },
      [dispatch],
  )

       
  return (
      <>
        <section ref={dropTarget} className={` ${styles.box_constructor} pt-5 pl-4 pr-4`}>  
            <div className={` ${styles.rolls} pb-5 pr-5`}>
            {buns &&
              <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${buns.name} (верх)`}
                    price={buns.price}
                    thumbnail={buns.image}
                />}
            </div>
           
            <div  className={`custom-scroll ${styles.scrollbar}`}>
                <ul  className={styles.list_constructor}>
                      {ingredients.map((item, index) => (
                         <Element key={item.id} index={index} item={item} moveListItem={moveListItem}/>)
                        )}
                </ul>
            </div> 
           
            <div className={` ${styles.rolls} pb-5 pr-5 pt-5`}>
            {buns &&
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${buns.name} (низ)`}
                  price={buns.price}
                  thumbnail={buns.image}
                  />}
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
      
        {isPopupOpen && <Modal onClose={onClose}>
          <OrderDetails onClose={onClose}>
          </OrderDetails>
        </Modal>
        }
      </>
  )
}

export default BurgerConstructor
