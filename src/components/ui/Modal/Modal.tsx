import {ReactNode} from "react";
import styles from './Modal.module.scss'
import {createPortal} from "react-dom";

interface ModalProps {
  children:ReactNode;
  close:()=> void;
}

export const Modal = ({children,close}:ModalProps) => {
  const node = document.getElementById('modal');
  if(!node) return null;

  const onCloseModal = () =>{
    close();
  }
  return createPortal((
    <div className={styles.modal}>
      <div onClick={onCloseModal} className={styles.modal_wrapper}/>
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>
  ),node)
}