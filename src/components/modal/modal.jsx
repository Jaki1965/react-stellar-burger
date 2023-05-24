import ReactDOM from "react-dom";
import React from 'react';
import styles from './modal.module.css';
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modal");

const Modal = ({ children, onClose }) => {

    React.useEffect(() => {
      function closeByEscape(evt) {
        if(evt.key === 'Escape') {
          onClose();
        }
      }
        document.addEventListener('keydown', closeByEscape);
        return () => {
          document.removeEventListener('keydown', closeByEscape);
        }
  
    }, []) 

 
  return ReactDOM.createPortal(
    (
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal} onClick={onClose} >
          <button onClick={onClose} className={styles.close_button}>
            <CloseIcon type="primary" />
          </button>
          {children}
      </div>
    </>
    ),

    modalRoot
  );


}

Modal.propTypes = { children: PropTypes.object.isRequired, onClose: PropTypes.func.isRequired };

export default Modal;