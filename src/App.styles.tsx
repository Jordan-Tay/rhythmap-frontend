import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  background: linear-gradient(90deg, black, lightgreen);
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, lightslategray, lightgreen);
    left: -40%;
    top: -40%;
    border-radius: 50%;
    filter: blur(120px);
    animation: spin 30s infinite linear;
    transform-origin: 50% 50%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, lightslategray, lightgreen);
    right: -40%;
    bottom: -40%;
    border-radius: 50%;
    filter: blur(120px);
    animation: spin 30s infinite linear;
    transform-origin: 50% 50%;
    z-index: 0;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

`;