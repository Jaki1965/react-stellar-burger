import ReactDOM from "react-dom";
import React from 'react';
import styles from './modal.module.css';
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

const Modal = ({ children, onClose}) => {

 

  React.useEffect(() => {

    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        onClose()
        }
      })
    
     
      return () => {
        document.removeEventListener("keydown", (evt) => {
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

Modal.propTypes = {children: PropTypes.object.isRequired, onClose: PropTypes.func.isRequired};

export default Modal;