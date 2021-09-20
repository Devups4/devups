import React from 'react';
import { Navigation } from '@/Image/Navigation';
import { HomePage } from '@/Image/Homepage';
import { ClipBoard } from '@/Image/ClipBoard';
import { Article } from '@/Image/Article';
import { Notify } from '@/Image/Notify';
import { Search } from '@/Image/Search';
import { MenuBarWrapper } from '@/Layout/Menubar/style';
import gravatar from 'gravatar';

const Menubar = ({ children }) => {
  return (
    <>
      <MenuBarWrapper>
        <HomePage width="30px" height="30px"></HomePage>
        <span>
          <span>My Board</span>
          <ClipBoard width="30px" height="30px"></ClipBoard>
        </span>
        <span>
          <span>My Feed</span>
          <Article width="30px" height="30px"></Article>
        </span>
        <span>
          <input />
          <Search width="30px" height="30px"></Search>
        </span>
        <Notify width="30px" height="30px"></Notify>
        <img src={gravatar.url('asdf', { s: '30px', d: 'retro' })} alt="user" />
        <Navigation width="30px" height="30px"></Navigation>
      </MenuBarWrapper>
      <div>{children}</div>
    </>
  );
};

export default Menubar;
