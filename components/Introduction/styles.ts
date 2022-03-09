import styled from "styled-components";

export const Container = styled.section`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) =>
    `linear-gradient(-45deg, ${
      theme.title === "dark"
        ? "#e2d8e7 , #000000,#5e3096, #c7b9f0"
        : "lightGray , lightBlue,#ccc, gray"
    })`};
  background-size: 400% 400%;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: gradiente 14s ease-in-out infinite;

  @keyframes gradiente {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .wrapper {
    display: flex;
    margin-left: 0px;
    left: -20px;
    transition: all 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  .apresentation {
    color: ${({ theme }) => theme.colors.textPrimary};
    span {
      font-size: 18px;
    }
    h1 {
      font-size: 32px;
    }
  }
`;
