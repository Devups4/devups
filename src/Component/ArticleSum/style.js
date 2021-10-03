import styled from '@emotion/styled';

export const ArticleCardWrapper = styled.section`
  margin-bottom: 50px;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const ArticleBodyWrapper = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  margin-bottom: 30px;
  & > h1 {
    font-size: 40px;
  }

  & > article {
    font-size: 20px;
    max-width: 1000px;
    padding: 80px 0;
  }
  & .hashtag > li {
    float: left;
  }
  & .hashtag > li > span {
    margin-right: 10px;
    padding: 8px;
    border-radius: 10px;
    background: #6200ee;
  }
  & .button > li {
    float: left;
  }
  & .button > li > span {
    margin-right: 10px;
    padding: 8px;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin: 50px 0;
  cursor: pointer;
  & .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    & > div {
      font-size: 20px;
    }
    & > address {
      color: darkgrey;
    }
  }
`;
