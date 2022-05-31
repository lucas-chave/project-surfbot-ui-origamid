import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    animation: is-rotating 1s infinite;
    border: 10px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 120px;
    width: 120px;
    color: transparent;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;