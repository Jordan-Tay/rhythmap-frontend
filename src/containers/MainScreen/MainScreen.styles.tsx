import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .buttons-wrapper {
    width: 50%;
    z-index: 10;
    div {
      margin: 10px;
    }
  }
`;
