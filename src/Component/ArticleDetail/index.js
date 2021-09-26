import { FeedWrapper } from '@/Page/UserPage/style';
import { articleFetcher } from '@/Util/fetcher';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import ArticleCard from '../ArticleCard';

const ArticleDetail = ({ onClickUser, onClickArticle, user }) => {
  const { userId, articleId } = useParams();
  const { data: articles } = useSWR('/article', articleFetcher);
  return (
    <FeedWrapper>
      <div>&nbsp;</div>
      <ArticleCard
        user={user}
        onClickUser={onClickUser}
        onClickArticle={onClickArticle}
        article={articles?.find((ele) => ele.id === articleId)}
        content={articles?.find((ele) => ele.id === articleId)?.content}
      />
      <div>&nbsp;</div>
    </FeedWrapper>
  );
};

export default ArticleDetail;
