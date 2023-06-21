import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React from 'react';
import {getIngredientsData} from '../../utils/api';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"
import {Routes, Route, Link} from 'react-router-dom';
import Login from '../../pages/login';


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
      <DndProvider backend={HTML5Backend}>
        <AppHeader />      
        {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
          <main className={styles.main}>
            {stateData.length && <BurgerIngredients />}
            {stateData.length && <BurgerConstructor />}
          </main>
        } 
        <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </DndProvider>
    </div>
    
  );
}



export default App;
