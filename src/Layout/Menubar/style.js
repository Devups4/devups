import styled from '@emotion/styled';

export const MenuBarWrapper = styled.div`
  padding-bottom: 80px;
`;
export const MenuBarContentWrapper = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const LeftMenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  flex-basis: 0;
  & > div {
    background: #6200ee;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 3px;
    & > a > span {
      color: white;
      text-decoration: none;
      margin-right: 10px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: center;
  border-radius: 5px;
  & > input {
    background: #c4c4c4;
    border: none;
    padding: 3px;
    font-size: 24px;
  }
  & > a {
    background: #c4c4c4;
  }
`;

export const RightMenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  & > div {
    cursor: pointer;
  }
`;

export const ProfileWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

export const NavigationWrapper = styled.div``;

export const NotifyWrapper = styled.div``;
