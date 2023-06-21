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
import Home from "../../pages/home/home";


function App() {

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader /> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          
        </Routes>     
       
      </DndProvider>
    </div>
    
  );
}



export default App;
