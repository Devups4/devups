import React from 'react';
import useSWR from 'swr';
import { Navigation } from '@/Image/Navigation';
import { HomePage } from '@/Image/Homepage';
import { ClipBoard } from '@/Image/ClipBoard';
import { Article } from '@/Image/Article';
import { Notify } from '@/Image/Notify';
import { Search } from '@/Image/Search';
import {
  MenuBarWrapper,
  ProfileWrapper,
  LeftMenuWrapper,
  SearchWrapper,
  RightMenuWrapper,
} from '@/Layout/Menubar/style';
import gravatar from 'gravatar';
import { loginFetcher } from '@/Util/fetcher';

const Menubar = ({ children }) => {
  const { data: user, error } = useSWR('/login', loginFetcher);

  return (
    <>
      <MenuBarWrapper>
        <LeftMenuWrapper>
          <HomePage width="30px" height="30px"></HomePage>
          <div>
            <span>My Board</span>
            <ClipBoard width="30px" height="30px"></ClipBoard>
          </div>
          <div>
            <span>My Feed</span>
            <Article width="30px" height="30px"></Article>
          </div>
        </LeftMenuWrapper>
        <SearchWrapper>
          <input />
          <Search width="30px" height="30px"></Search>
        </SearchWrapper>
        <RightMenuWrapper>
          <Notify width="30px" height="30px"></Notify>
          <ProfileWrapper>
            <img src={gravatar.url(user?.email, { s: '30px', d: 'retro' })} alt="user" />
          </ProfileWrapper>
          <Navigation width="30px" height="30px"></Navigation>
        </RightMenuWrapper>
      </MenuBarWrapper>
      <div>{children}</div>
    </>
  );
};

export default Menubar;
