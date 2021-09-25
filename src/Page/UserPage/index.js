import Menubar from '@/Layout/Menubar';
import React, { useCallback, useState } from 'react';
import gravatar from 'gravatar';
import { articleFetcher, userInfoFetcher } from '@/Util/fetcher';
import useSWR from 'swr';
import { ProfileWrapper, UserInfoWrapper, FeedWrapper, UserDetailWrapper, ButtonWrapper } from './style';
import { useParams } from 'react-router-dom';
import FollowModal from '@/Component/FollowModal';
import ArticleCard from '@/Component/ArticleCard';
import { useHistory } from 'react-router-dom';

const Feed = () => {
  const history = useHistory();
  const { userId } = useParams();
  const { data: articles } = useSWR('/article', articleFetcher);
  const { data: user } = useSWR('/login', userInfoFetcher);
  const [openFollowingModal, setOpenFollowModal] = useState(false);
  const [typeofFollow, setTypeOfFollow] = useState('팔로우');

  const onClickUser = useCallback(
    (userId) => {
      return () => {
        history.push(`/${userId}`);
      };
    },
    [history],
  );

  const onClickArticle = useCallback(
    (articleId, userId) => {
      return () => {
        history.push(`/${userId}/${articleId}`);
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
      <UserInfoWrapper onClick={onClickUser(user?.id)}>
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
