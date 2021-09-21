import React, { useState, useCallback } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { Navigation } from '@/Image/Navigation';
import { HomePage } from '@/Image/Homepage';
import { ClipBoard } from '@/Image/ClipBoard';
import { Article } from '@/Image/Article';
import { Notify } from '@/Image/Notify';
import { Search } from '@/Image/Search';
import {
  MenuBarContentWrapper,
  ProfileWrapper,
  LeftMenuWrapper,
  SearchWrapper,
  RightMenuWrapper,
  NavigationWrapper,
  NotifyWrapper,
  MenuBarWrapper,
} from '@/Layout/Menubar/style';
import gravatar from 'gravatar';
import { userInfoFetcher } from '@/Util/fetcher';
import ProfileModal from '@/Component/ProfileModal';
import NotifyModal from '@/Component/NotifyModal';
import FollowModal from '@/Component/FollowModal';

const Menubar = ({ children }) => {
  const { data: user, error } = useSWR('/login', userInfoFetcher);
  const [openMyStatusModal, setOpenMyStatusModal] = useState(false);
  const [typeOfFollow, setTypeOfFollow] = useState(null);
  const [openFollowModal, setOpenFollowModal] = useState(false);
  const [openNotifyModal, setOpenNotifyModal] = useState(false);
  console.log(user);

  const onOpenMyStatusModal = useCallback(() => {
    setOpenMyStatusModal(true);
  }, []);

  const onOpenFollowModal = useCallback(() => {
    setOpenFollowModal(true);
    setTypeOfFollow('팔로우');
  }, []);

  const onOpenFollowingModal = useCallback(() => {
    setOpenFollowModal(true);
    setTypeOfFollow('팔로잉');
  }, []);

  const onCloseFollowModal = useCallback(() => {
    setOpenFollowModal(false);
  }, []);

  const onOpenNotifyModal = useCallback(() => {
    setOpenNotifyModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenMyStatusModal(false);
    setOpenNotifyModal(false);
  }, []);

  return (
    <>
      <MenuBarWrapper>
        <MenuBarContentWrapper>
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
            <NotifyWrapper onClick={onOpenNotifyModal}>
              <Notify width="30px" height="30px"></Notify>
            </NotifyWrapper>
            <ProfileWrapper onClick={onOpenMyStatusModal}>
              <img src={gravatar.url(user?.email, { s: '30px', d: 'retro' })} alt="user" />
            </ProfileWrapper>
            <NavigationWrapper onClick={onOpenMyStatusModal}>
              <Navigation width="30px" height="30px"></Navigation>
            </NavigationWrapper>
          </RightMenuWrapper>
        </MenuBarContentWrapper>
      </MenuBarWrapper>
      <div>{children}</div>
      <ProfileModal
        openFlag={openMyStatusModal}
        onCloseModal={onCloseModal}
        user={user}
        onOpenFollowModal={onOpenFollowModal}
        onOpenFollowingModal={onOpenFollowingModal}
      />
      <NotifyModal openFlag={openNotifyModal} onCloseModal={onCloseModal} />
      <FollowModal openFlag={openFollowModal} onCloseModal={onCloseFollowModal} typeOfFollow={typeOfFollow} />
    </>
  );
};

export default Menubar;
