import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { ProfileModalWrapper, CloseButtonWrapper, UserInfoWrapper } from './style';

const ProfileModal = ({ openFlag, onCloseModal, onOpenFollowModal, onOpenFollowingModal, user }) => {
  return (
    <>
      {openFlag && (
        <Modal onCloseModal={onCloseModal}>
          <ProfileModalWrapper>
            <CloseButtonWrapper>
              <button onClick={onCloseModal}>
                <div>&#43;</div>
              </button>
            </CloseButtonWrapper>
            <UserInfoWrapper>
              <span>{user?.name}</span>님 안녕하세요.
            </UserInfoWrapper>
            <br />
            <div>
              <span onClick={onOpenFollowingModal}>팔로잉 : {user?.following?.length}&nbsp;</span>
              <span onClick={onOpenFollowModal}>팔로우 : {user?.follow?.length}</span>
            </div>
            <br />
            <Link to={`/${user?.id}`}>마이 페이지로 이동</Link>
            <br />
            <div>로그아웃</div>
          </ProfileModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
