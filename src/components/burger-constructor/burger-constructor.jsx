import React from 'react';
import Modal from '../modal/modal';
import styles from './burger-constructor.module.css';
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import PopupConstructor from '../popup-constructor/popup-constructor';


const BurgerConstructor = ({data}) => {

 const [popupConstructor, setPopupConstructor] = React.useState(null);

  const onOpen = () => {
    setPopupConstructor(!null)
  }

  const onClose = () => {
    setPopupConstructor(null)
  }

  // const data = props.data;

  const elementBurger = data.filter(item => item.type !== 'bun');
  const elementBurgerClosed = data.find(item => item.type === 'bun');

  return (
      <>
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
                    <p className="text text_type_digits-medium pr-2">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={onOpen}
                  htmlType="button" 
                  type="primary" 
                  size="large">Оформить заказ</Button>
            </div>
        </section>
        {popupConstructor && <Modal onClose={onClose}>
          <PopupConstructor onClose={onClose}>
          </PopupConstructor>
        </Modal>
      }
      </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerConstructor
