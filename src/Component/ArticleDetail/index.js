import { articleFetcher } from '@/Util/fetcher';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const ArticleDetail = ({ onClickUser }) => {
  const { userId, articleId } = useParams();
  const { data: article } = useSWR(`/article/${userId}/${articleId}`, articleFetcher);
  console.log(article);
  console.log(onClickUser);
  return (
    <div>
      <h1>{article?.title}</h1>
      <div>
        <div onClick={onClickUser(userId)}>{article?.name}</div>
        <div>{article?.timeStamp}</div>
      </div>
      <article>{article?.content}</article>
      <div>
        <div>like:{article?.numOfLike}</div>
        <div>comment:{article?.numOfComment}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;
