import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import React from 'react';

function App() {

  const urlData = 'https://norma.nomoreparties.space/api/ingredients';

  const [stateData, setStateData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(urlData);
        const burgerData = await res.json();
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
      {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
        <main className={styles.main}>
          {stateData.length && <BurgerIngredients data={stateData} />}
          {stateData.length && <BurgerConstructor data={stateData} />}
          
        </main>
      }
    </div>
  );
}

export default App;
