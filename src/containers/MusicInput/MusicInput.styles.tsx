import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background: ${(props) => props.color};

  .input-wrapper {
    display: flex;
    flex-direction: row;
    width: 80%;
    select {
      width: 20%;
      outline: none;
      border: none;
      border-bottom: solid 2px;
      font-family: circular-black;
      font-size: 24px;
      text-align: center;
    }
    option {
      font-family: circular-black;
      font-size: 30px;
    }
    input {
      width: 80%;
      height: 50px;
      font-size: 24px;
      font-family: circular-black;
      border: none;
      border-bottom: solid 2px;
      outline: none;
      transition: width 0.5s ease-in-out;
      padding: 0px 30px;
      text-align: center;
      background: none;
    }
    select {
      background: none;
    }
  }

  .buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    .button-wrapper {
      // width: 40%;
      margin: 10px;
    }
  }
`;
