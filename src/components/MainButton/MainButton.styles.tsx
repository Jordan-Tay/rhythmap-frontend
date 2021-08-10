import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: solid 1px #31383e;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  transition-duration: 0.4s;
  background: #31383e;
  color: white;
  font-family: circular-black;
  :hover {
    border: solid 1px #31383e;
    background: none;
    color: #31383e;
  }
`;
