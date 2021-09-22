import React from 'react';
import { UserItemWrapper, UserInfoWrapper } from './style';
import gravatar from 'gravatar';
import { ProfileWrapper } from '@/Layout/Menubar/style';

const FollowingUserItem = React.memo(({ user, onClick }) => {
  return (
    <UserItemWrapper>
      <UserInfoWrapper>
        <ProfileWrapper>
          <img src={gravatar.url(user?.email, { s: '30px', d: 'retro' })} alt="user" />
        </ProfileWrapper>
        <div>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      </UserInfoWrapper>
      <button onClick={onClick}>삭제</button>
    </UserItemWrapper>
  );
});

export default FollowingUserItem;
