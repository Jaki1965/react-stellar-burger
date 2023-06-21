import styles from "./home.module.css";
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import React from 'react';
import {getIngredientsData} from '../../utils/api';


function Home() {

  const [stateData, setStateData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);


  React.useEffect(() => {
    const getData = async () => {
      try {
          const burgerData = await getIngredientsData();
          setStateData(burgerData.data); 
          }
      catch (err) {
        setIsError(true);
        console.log('Ошибка загрузки данных', err);
      }
    }

    getData();

  }, []); 

  return (
    <div className={styles.home}>
        {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
          <main className={styles.main}>
            {stateData.length && <BurgerIngredients />}
            {stateData.length && <BurgerConstructor />}
          </main>
        } 
    </div>
    
  );
}



export default Home;
