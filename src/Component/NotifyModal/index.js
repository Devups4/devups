import React from 'react';
import { NotifyModalWrapper } from './style';
import Modal from '@/Component/Modal';

const NotifyModal = ({ openFlag, onCloseModal }) => {
  return (
    <>
      {openFlag && (
        <Modal onCloseModal={onCloseModal}>
          <NotifyModalWrapper>안녕안녕</NotifyModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default NotifyModal;
