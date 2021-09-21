import React from 'react';
import { ModalBackground } from '@/Component/Modal/style';

const Modal = ({ children, onCloseModal }) => {
  return (
    <>
      <ModalBackground onClick={onCloseModal} />
      {children}
    </>
  );
};

export default Modal;
