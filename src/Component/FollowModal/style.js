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
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > h1 {
    font-weight: bold;
    font2size: 2rem;
  }
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button {
    border: none;
    background: none;
    border-radius: 3px;
  }
  & > button > div {
    cursor: pointer;
    transform: rotate(45deg);

    font-size: 2rem;
  }
`;
