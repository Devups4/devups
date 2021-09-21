import styled from '@emotion/styled';

export const MenuBarWrapper = styled.div`
  background: white;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftMenuWrapper = styled.div`
  display: flex;
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
  background: #c4c4c4;
  border-radius: 5px;
  & > input {
    background: #c4c4c4;
    border: none;
    padding: 3px;
    font-size: 24px;
  }
`;

export const RightMenuWrapper = styled.div`
  display: flex;
  padding-right: 10%;
`;

export const ProfileWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;
