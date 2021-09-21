import styled from '@emotion/styled';

export const FollowModalWrapper = styled.div`
  position: absolute;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 10px;
`;

export const FollowModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  & > h1 {
    font-weight: bold;
  }
`;
