import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  display: fixed;
  background-color: ${(props) => (props ? props.backgroundColor : 'none')};
`;
