import React from 'react';
import Modal from '@/Component/Modal';
import FollowUserItem from '@/Component/FollowUserItem';
import { FollowModalWrapper, FollowModalTitleWrapper, CloseButtonWrapper } from './style';
import FollowingUserItem from '../FollowingUserItem';

const FollowModal = ({ openFlag, onCloseModal, typeOfFollow, follow, following }) => {
  return (
    <>
      {openFlag && (
        <Modal onCloseModal={onCloseModal} backgroundColor="rgba(0,0,0,0.65)">
          <FollowModalWrapper>
            <FollowModalTitleWrapper>
              <div> &nbsp;</div>
              <div>
                <h1>{typeOfFollow}</h1>
              </div>
              <CloseButtonWrapper>
                <button onClick={onCloseModal}>
                  <div>&#43;</div>
                </button>
              </CloseButtonWrapper>
            </FollowModalTitleWrapper>
            <ul>
              {typeOfFollow === '팔로우'
                ? follow.map((user) => (
                    <li key={user?.id}>
                      <FollowUserItem user={user} />
                    </li>
                  ))
                : following.map((user) => (
                    <li key={user?.id}>
                      <FollowingUserItem user={user} />
                    </li>
                  ))}
            </ul>
          </FollowModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default FollowModal;
