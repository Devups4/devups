import Menubar from '@/Layout/Menubar';
import React, { useCallback, useState } from 'react';
import gravatar from 'gravatar';
import { articlesFetcher, userInfoFetcher } from '@/Util/fetcher';
import useSWR from 'swr';
import { ProfileWrapper, UserInfoWrapper, FeedWrapper, UserDetailWrapper, ButtonWrapper } from './style';
import FollowModal from '@/Component/FollowModal';
import ArticleCard from '@/Component/ArticleSum';
import { Route, useParams } from 'react-router-dom';
import ArticleDetail from '@/Component/ArticleDetail';

const Feed = ({ history, match }) => {
  const { userId } = useParams();
  const { data: articles } = useSWR('/article', articlesFetcher);
  const { data: user } = useSWR('/login', userInfoFetcher);
  const [openFollowingModal, setOpenFollowModal] = useState(false);
  const [typeofFollow, setTypeOfFollow] = useState('팔로우');

  const onClickUser = useCallback(
    (userId) => {
      return () => {
        history.push(`/userpage/${userId}`);
      };
    },
    [history],
  );

  const onClickArticle = useCallback(
    (articleId, userId) => {
      return () => {
        history.push(`/userpage/${userId}/${articleId}`);
      };
    },
    [history],
  );

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

  return (
    <>
      <Menubar></Menubar>
      <UserInfoWrapper>
        <ProfileWrapper onClick={onClickUser(user?.id)}>
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
      <Route
        exact
        path={match.path}
        render={() => (
          <FeedWrapper>
            <div>Hashtag</div>
            <div>
              <ul>
                {articles?.map((article) => (
                  <li key={article.id}>
                    <ArticleCard
                      article={article}
                      onClickUser={onClickUser}
                      onClickArticle={onClickArticle}
                      user={user}
                      content={article.des}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>&nbsp;</div>
          </FeedWrapper>
        )}
      />
      <Route path={`${match.path}/:articleId`} render={() => <ArticleDetail onClickUser={onClickUser} />} />
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
