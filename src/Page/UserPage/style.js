import styled from '@emotion/styled';

export const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  & > div:nth-of-type(1) {
    flex-grow: 1;
  }
  & > div:nth-of-type(2) {
    flex-grow: 3;
  }
  & > div:nth-of-type(3) {
    flex-grow: 1;
    padding: 0 5%;
  }
`;

export const ProfileWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export const UserDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  & > * {
    margin-bottom: 10px;
  }
  & > ul > li {
    display: inline;
  }
  & > ul > li:nth-of-type(1) {
    margin-right: 3px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 30px;
  & > button {
    height: 30px;
    background: none;
    border-radius: 3px;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  }
`;
