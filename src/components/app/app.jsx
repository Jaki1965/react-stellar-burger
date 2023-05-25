import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React from 'react';
import {getIngredientsData} from '../../utils/api';
import {MainContext} from '../services/main-context';


function App() {

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
    <div className={styles.app}>
        <AppHeader />
      <MainContext.Provider value={{stateData, setStateData}} >
        {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
          <main className={styles.main}>
            {stateData.length && <BurgerIngredients data={stateData} />}
            {stateData.length && <BurgerConstructor data={stateData} />}
          </main>
        }
      </MainContext.Provider>
    </div>
  );
}



export default App;
