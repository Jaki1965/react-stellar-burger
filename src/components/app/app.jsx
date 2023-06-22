import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"
import {Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Home from "../../pages/home/home";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import NotFound404 from "../../pages/not-found-404/not-found-404";


function App() {

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader /> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound404/>}/>
        </Routes>     
      </DndProvider>
    </div>
  );
}



export default App;
