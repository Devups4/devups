import React from 'react';
import gravatar from 'gravatar';
import { ArticleCardWrapper, ProfileWrapper, UserInfoWrapper, ArticleBodyWrapper } from './style';
const ArticleCard = ({ article, onClickUser, onClickArticle, user, content }) => {
  return (
    <ArticleCardWrapper>
      <ArticleBodyWrapper onClick={onClickArticle(article?.id, user?.id)}>
        <h1>{article?.title}</h1>
        <article>{content}</article>
        <div>
          <ul className="hashtag">
            {article?.hashtag.map((tag, idx) => (
              <li key={tag.id}>
                <span>{tag.value}</span>
              </li>
            ))}
          </ul>
          {user.id === article?.userId && (
            <ul className="button">
              <li>
                <span>좋아요</span>
              </li>
              <li>
                <span>수정</span>
              </li>
              <li>
                <span>삭제</span>
              </li>
            </ul>
          )}
        </div>
      </ArticleBodyWrapper>

      <UserInfoWrapper onClick={onClickUser(user.id)}>
        <ProfileWrapper>
          <img src={gravatar.url(article?.user, { s: '100px', d: 'retro' })} alt="user" />
        </ProfileWrapper>
        <div className="name">
          <div>작성자 : {article?.name}</div>
          <address>{article?.user}</address>
        </div>
      </UserInfoWrapper>
    </ArticleCardWrapper>
  );
};

export default React.memo(ArticleCard);
