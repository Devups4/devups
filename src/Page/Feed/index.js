import Menubar from '@/Layout/Menubar';
import React, { useCallback, useState } from 'react';
import gravatar from 'gravatar';
import { articleFetcher, userInfoFetcher } from '@/Util/fetcher';
import useSWR from 'swr';
import { ProfileWrapper, UserInfoWrapper, FeedWrapper, UserDetailWrapper, ButtonWrapper } from './style';
import { useParams } from 'react-router-dom';
import FollowModal from '@/Component/FollowModal';

const Feed = () => {
  const { userId } = useParams();
  const { data: article } = useSWR('/article', articleFetcher);
  const { data: user } = useSWR('/login', userInfoFetcher);
  const [openFollowingModal, setOpenFollowModal] = useState(false);
  const [typeofFollow, setTypeOfFollow] = useState('팔로우');
  const onCloseModal = useCallback(() => {
    setOpenFollowModal(false);
  }, []);

  const onOpenFollowModal = useCallback(() => {
    setOpenFollowModal(true);
    setTypeOfFollow('팔로우');
  }, []);

  const onOpenFollowingModal = useCallback(() => {
    setOpenFollowModal(true);
    setTypeOfFollow('팔로잉');
  }, []);
  console.log(user);
  return (
    <>
      <Menubar></Menubar>
      <UserInfoWrapper>
        <ProfileWrapper>
          <img src={gravatar.url(user?.email, { s: '200px', d: 'retro' })} alt="user" />
        </ProfileWrapper>
        <UserDetailWrapper>
          <div>{user?.name}</div>
          <div>{user?.email}</div>
          <ul>
            <li onClick={onOpenFollowModal}>팔로우 : {user?.follow.length}</li>
            <li onClick={onOpenFollowingModal}>팔로잉 : {user?.following.length}</li>
          </ul>
        </UserDetailWrapper>
        <ButtonWrapper>{userId === user?.id && <button>프로필 편집</button>}</ButtonWrapper>
      </UserInfoWrapper>
      <FeedWrapper>
        <div>&nbsp;</div>
        <div>
          <ul>
            {article?.hashtag.map((ele) => (
              <li>
                {ele.value}&nbsp;{ele.num}
              </li>
            ))}
          </ul>
        </div>
        <div>article</div>
      </FeedWrapper>
      <FollowModal
        onCloseModal={onCloseModal}
        openFlag={openFollowingModal}
        typeOfFollow={typeofFollow}
        follow={user?.follow}
        following={user?.following}
      />
    </>
  );
};

export default Feed;
