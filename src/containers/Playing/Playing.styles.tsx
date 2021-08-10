import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  font-family: circular-black;
  background: ${(props) => props.color};
  .wrapper {
    .text-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    width: 50%;
  }
`;
