import React from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <HomePage width="30px" height="30px"></HomePage>
          </Link>
          <div>
            <Link to="/board">
              <span>My Board</span>
            </Link>
            <ClipBoard width="30px" height="30px"></ClipBoard>
          </div>
          <div>
            <Link to="/feed">
              <span>My Feed</span>
            </Link>
            <Article width="30px" height="30px"></Article>
          </div>
        </LeftMenuWrapper>
        <SearchWrapper>
          <input />
          <Link to="/search">
            <Search width="30px" height="30px"></Search>
          </Link>
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
