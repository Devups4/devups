import React from 'react';
import { ModalBackground } from '@/Component/Modal/style';

const Modal = ({ children, onCloseModal, backgroundColor }) => {
  return (
    <>
      <ModalBackground onClick={onCloseModal} backgroundColor={backgroundColor} />
      {children}
    </>
  );
};

export default Modal;
