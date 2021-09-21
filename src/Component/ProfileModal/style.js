import styled from '@emotion/styled';

export const ProfileModalWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 11px 4px #d6d6d6;
  padding: 30px;
  position: absolute;
  top: 80px;
  right: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > button {
    border: 1px solid black;
    background: none;
  }
  & > button > div {
    cursor: pointer;
    transform: rotate(45deg);
    font-weight: bold;
  }
`;

export const UserInfoWrapper = styled.h1`
  & > span {
    font-weight: bold;
  }
`;
