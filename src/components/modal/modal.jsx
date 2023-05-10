import ReactDOM from "react-dom";
import React from 'react';
import styles from './modal.module.css';

const modalRoot = document.getElementById("modal");

const Modal = ({ children, onClose }) => {

  const closePopup = () => {
    document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            onClose()
        }
    })
    onClose()
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePopup()
    }
})

  

  return ReactDOM.createPortal(
    (<>
      <div className={styles.modal} /*onClick={closePopup}*/>
        {children}
      </div>
    </>),

    modalRoot
  );


}

export default Modal;