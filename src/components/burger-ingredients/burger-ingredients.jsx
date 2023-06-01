
import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBurgerData } from '../services/actions/api';
import {ITEM_OPEN, ITEM_CLOSE, MODAL_OPEN, MODAL_CLOSE} from '../services/actions/burger-ingredients';
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {

  const {data} = useSelector(store => store.data);
  const open = useSelector(store => store.open.isOpen);

  const [buns, bunsEntry] = useInView({ threshold: 1, root: document.querySelector('#viewport') });
  const [sauces, saucesEntry] = useInView({ threshold: 0.9, root: document.querySelector('#viewport')});
  const [fillings, fillingsEntry] = useInView({ threshold: 0.2, root: document.querySelector('#viewport')});

 
  const dispatch = useDispatch();
 
  useEffect(()=> {
    dispatch(getBurgerData())
}, [])


  const onOpen =(item) => {
    dispatch({type: ITEM_OPEN, ingredient: item});
    dispatch({type: MODAL_OPEN});
  }

  const onClose = () => {
    dispatch({type: MODAL_CLOSE });
    dispatch({type: ITEM_CLOSE});
  }


  const bun = data.filter(item => item.type === 'bun');
  const sauce = data.filter(item => item.type === 'sauce');
  const main = data.filter(item => item.type === 'main');

  const getDataCard = (data) => {
    return data.map(item => {
      return <IngredientCard item={item} key={item._id} onOpen={onOpen} onClose={onClose} />
    })
  }

  
  return (
    <>
      <section>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
        <div className={styles.menu}>
          <Tab value='buns' active={bunsEntry === true} >Булки</Tab>
          <Tab value='sauces' active={saucesEntry === true} >Соусы</Tab>
          <Tab value='fillings' active={fillingsEntry === true} >Начинки</Tab>
        </div >
        <div id="viewport" className={`custom-scroll ${styles.scrollbar}`}>
          <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
          <ul  ref={buns} className={styles.list}>
            {getDataCard(bun)}
          </ul>
          <h2 className="text text_type_main-medium mt-10 mb-6" >Соусы</h2>
          <ul ref={sauces} className={styles.list}>
            {getDataCard(sauce)}
          </ul>
          <h2 className="text text_type_main-medium mt-10 mb-6" >Начинки</h2>
          <ul ref={fillings} className={styles.list}>
            {getDataCard(main)}
          </ul>
        </div>
      </section>
      {
        open && <Modal onClose={onClose} >
          <IngredientDetails onClose={onClose} >
          </IngredientDetails>
        </Modal>
      }
    </>

  );
}


export default BurgerIngredients;