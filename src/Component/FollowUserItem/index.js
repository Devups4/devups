import React from 'react';
import { UserItemWrapper, UserInfoWrapper, UserNameEmailWrapper } from './style';
import gravatar from 'gravatar';
import { ProfileWrapper } from '@/Layout/Menubar/style';

const FollowUserItem = React.memo(({ user, onClick }) => {
  return (
    <UserItemWrapper>
      <UserInfoWrapper>
        <ProfileWrapper>
          <img src={gravatar.url(user?.email, { s: '30px', d: 'retro' })} alt="user" />
        </ProfileWrapper>
        <UserNameEmailWrapper>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </UserNameEmailWrapper>
      </UserInfoWrapper>
      <button onClick={onClick}>삭제</button>
    </UserItemWrapper>
  );
});

export default FollowUserItem;
