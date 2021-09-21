import React from 'react';
import Modal from '../Modal';
import { ProfileModalWrapper, ButtonWrapper, UserInfoWrapper } from './style';

const ProfileModal = ({ openFlag, onCloseModal, user }) => {
  return (
    <>
      {openFlag && (
        <Modal onCloseModal={onCloseModal}>
          <ProfileModalWrapper>
            <ButtonWrapper>
              <button onClick={onCloseModal}>
                <div>&#43;</div>
              </button>
            </ButtonWrapper>
            <br />
            <UserInfoWrapper>
              <span>{user?.name}</span>님 안녕하세요.{' '}
            </UserInfoWrapper>
            <br />
            <div>
              <span>팔로잉 : {user?.following?.length}&nbsp;</span>
              <span>팔로우 : {user?.follow?.length}</span>
            </div>
            <br />
            <div>마이 페이지로 이동</div>
            <br />
            <div>로그아웃</div>
          </ProfileModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
