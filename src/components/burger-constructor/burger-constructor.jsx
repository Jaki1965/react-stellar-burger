import styles from './burger-constructor.module.css';
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

const BurgerConstructor = (props) => {
  
  const elementBurger = props.data.filter(item => item.type !== 'bun');
  const elementBurgerClosed = props.data.find(item => item.type === 'bun');


  return (
      <>
          <section className={` ${styles.box_constructor} pt-5 pl-4 pr-4`}>
              <div className={` ${styles.buns} pb-5 pr-5`}>
                  <ConstructorElement
                      type="top"
                      isLocked={true}
                      text={`${elementBurgerClosed.name} (верх)`}
                      price={elementBurgerClosed.price}
                      thumbnail={elementBurgerClosed.image}
                  />
              </div>
              <div className={`custom-scroll ${styles.scroll}`}>
                  <ul className={styles.list}>
                      {elementBurger.map((item) => (
                          item.type !== 'bun' &&
                          <li className={styles.item} key={item._id}>
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
              <div className={` ${styles.buns} pb-5 pr-5 pt-5`}>
                  <ConstructorElement
                      type="bottom"
                      isLocked={true}
                      text={`${elementBurgerClosed.name} (низ)`}
                      price={elementBurgerClosed.price}
                      thumbnail={elementBurgerClosed.image}
                  />
              </div>
              <div className={`pt-10 pr-8 ${styles.checkout}`}>
                  <div className={styles.price}>
                      <p className="text text_type_digits-medium pr-2">610</p>
                      <CurrencyIcon type="primary" />
                  </div>
                  <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
              </div>
          </section>
      </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default BurgerConstructor
