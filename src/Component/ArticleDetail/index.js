import { articleFetcher } from '@/Util/fetcher';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { TextArea } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as outlinedHeart, faComment, faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
const ArticleDetail = ({ onClickUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const { userId, articleId } = useParams();
  const { data: article } = useSWR(`/article/${userId}/${articleId}`, articleFetcher);

  const onSubmit = useCallback(
    (content) => {
      content.dutgeul = content.dutgeul.replace(/(\n|\r\n)/g, '<br/>');
      const data = { userId, articleId, content: content.dutgeul };
      console.log(data);
      reset();
    },
    [userId, articleId],
  );
  if (article)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '70%' }}>
          <h1>{article?.title}</h1>
          <div>
            <div onClick={onClickUser(userId)}>{article?.name}</div>
            <div>{article?.timeStamp}</div>
          </div>
          <article>{article?.content}</article>
          <div>
            <span>
              <FontAwesomeIcon icon={article.isLike ? filledHeart : outlinedHeart} />
              &nbsp;{article?.numOfLike}&nbsp;
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              &nbsp;{article?.numOfComment}&nbsp;
            </span>
            <span>
              <FontAwesomeIcon icon={faEdit} title="수정하기" />
              &nbsp;
            </span>
            <span>
              <FontAwesomeIcon icon={faTrashAlt} title="삭제하기" />
              &nbsp;
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextArea {...register('dutgeul', { required: true })} placeholder="댓글을 작성하세요" />
            <div>
              <button type="submit">작성 하기</button>
            </div>
          </form>
        </div>
      </div>
    );
  else
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faSpinner} size="3x" />
      </div>
    );
};

export default ArticleDetail;
