import styled from '@emotion/styled';

export const ProfileModalWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 11px 4px #d6d6d6;
  padding: 10px;
  position: absolute;
  top: 80px;
  right: 8%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > button {
    border: none;
    background: none;
    padding: 5px;
    border-radius: 3px;
  }
  & > button > div {
    cursor: pointer;
    transform: rotate(45deg);
    padding: 5px;
    font-size: 30px;
  }
`;

export const UserInfoWrapper = styled.h1`
  & > span {
    font-weight: bold;
  }
`;
