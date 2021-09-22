import React from 'react';
import Modal from '@/Component/Modal';
import FollowUserItem from '@/Component/FollowUserItem';
import { FollowModalWrapper, FollowModalTitleWrapper, CloseButtonWrapper } from './style';
import FollowingUserItem from '../FollowingUserItem';
import axios from 'axios';
import { useSWRConfig } from 'swr';
const FollowModal = ({ openFlag, onCloseModal, typeOfFollow, follow, following }) => {
  const { mutate } = useSWRConfig();
  const onClickFollow = (followUserId) => {
    return () => {
      mutate('/login', async (data) => {
        await axios.delete('/user/follow', { data: { followUserId } });
        return { ...data, follow: data.follow.filter((user) => user.id !== followUserId) };
      });
    };
  };

  const onClickFollowing = (followingUserId) => {
    return () => {
      mutate('/login', async (data) => {
        await axios.delete('/user/following', { data: { followingUserId } });
        return { ...data, following: data.following.filter((user) => user.id !== followingUserId) };
      });
    };
  };

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
                      <FollowUserItem user={user} onClick={onClickFollow(user?.id)} />
                    </li>
                  ))
                : following.map((user) => (
                    <li key={user?.id}>
                      <FollowingUserItem user={user} onClick={onClickFollowing(user?.id)} />
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
