import React from 'react';
import Modal from '@/Component/Modal';
import { FollowModalWrapper, FollowModalTitleWrapper } from './style';
import { CloseButtonWrapper } from '../ProfileModal/style';

const FollowModal = ({ openFlag, onCloseModal, typeOfFollow }) => {
  return (
    <>
      {openFlag && (
        <Modal onCloseModal={onCloseModal} backgroundColor="rgba(0,0,0,0.65)">
          <FollowModalWrapper>
            <FollowModalTitleWrapper>
              <div></div>
              <h1>{typeOfFollow}</h1>
              <CloseButtonWrapper>
                <button onClick={onCloseModal}>
                  <div>&#43;</div>
                </button>
              </CloseButtonWrapper>
            </FollowModalTitleWrapper>
          </FollowModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default FollowModal;
