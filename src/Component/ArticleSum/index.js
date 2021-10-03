import React from 'react';
import gravatar from 'gravatar';
import { ArticleCardWrapper, ProfileWrapper, UserInfoWrapper, ArticleBodyWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as outlinedHeart, faTrashAlt, faEdit, faComment } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';

const ArticleCard = ({ article, onClickUser, onClickArticle, user }) => {
  return (
    <ArticleCardWrapper>
      <ArticleBodyWrapper>
        <h1 onClick={onClickArticle(article?.id, user?.id)}>{article?.title}</h1>
        <article onClick={onClickArticle(article?.id, user?.id)}>{article?.des}</article>
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
                <span>
                  <FontAwesomeIcon icon={faEdit} title="수정하기" />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faTrashAlt} title="삭제하기" />
                </span>
              </li>
            </ul>
          )}
        </div>
        <div style={{ paddingTop: '50px' }}>
          <span>
            <FontAwesomeIcon icon={article.isLike ? filledHeart : outlinedHeart} />
            &nbsp;{article.numOfLike}
            &nbsp;
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            &nbsp;{article.numOfComment}
          </span>
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
