import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  transition-duration: 0.4s;
  z-index: 1;
`;
