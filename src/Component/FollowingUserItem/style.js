import styled from '@emotion/styled';

export const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  justify-content: space-between;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
`;

export const UserNameEmailWrapper = styled.div`
  padding: 0 5px;

  & > div:nth-of-type(1) {
    font-size: 14px;
    padding-bottom: 3px;
  }

  & > div:nth-of-type(2) {
    color: #616161;
    font-size: 12px;
  }
`;
