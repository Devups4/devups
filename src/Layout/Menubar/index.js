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
import { loginFetcher } from '@/Util/fetcher';
import Modal from '@/Component/Modal';

const Menubar = ({ children }) => {
  const { data: user, error } = useSWR('/login', loginFetcher);
  const [openMyStatusModal, setOpenMyStatusModal] = useState(false);
  const [openNotifyModal, setOpenNotifyModal] = useState(false);
  console.log(user);

  const onOpenMyStatusModal = useCallback(() => {
    setOpenMyStatusModal(true);
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
      {openMyStatusModal && (
        <Modal onCloseModal={onCloseModal}>
          <div
            style={{
              borderRadius: '10px',
              boxShadow: '0px 0px 11px 4px #D6D6D6',
              padding: '30px',
              position: 'absolute',
              top: '80px',
              right: '8%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <h1>{user?.name}님 안녕하세요.</h1>
            <div>
              <span>팔로잉 : {user?.following?.length}&nbsp;</span>
              <span>팔로우 : {user?.follow?.length}</span>
            </div>
            <div>마이 페이지로 이동</div>
            <div>로그아웃</div>
          </div>
        </Modal>
      )}
      {openNotifyModal && (
        <Modal onCloseModal={onCloseModal}>
          <div
            style={{
              borderRadius: '10px',
              boxShadow: '0px 0px 11px 4px #D6D6D6',
              padding: '30px',
              position: 'absolute',
              top: '80px',
              right: '12%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            안녕안녕
          </div>
        </Modal>
      )}
    </>
  );
};

export default Menubar;
