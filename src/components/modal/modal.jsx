import ReactDOM from "react-dom";
import React from 'react';
import styles from './modal.module.css';

const modalRoot = document.getElementById("modal");

const Modal = ({ children, onClose }) => {

  React.useEffect(() => {
    
    document.removeEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        onClose()
        }
      })
     
      return () => {
        document.addEventListener("keydown", (evt) => {
          if (evt.key === "Escape") {
            onClose()
          }
        })
      }

  }, [])

 

  return ReactDOM.createPortal(
    (<>
      <div className={styles.modal} onClick={onClose}>
        {children}
      </div>
    </>),

    modalRoot
  );


}

export default Modal;