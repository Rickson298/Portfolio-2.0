import styled from "styled-components";

interface Container {
  backgroundHover: string;
}

export const Container = styled.div<Container>`
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 20px;
    width: 40px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .tooltip {
    position: relative;
    margin-bottom: -15px;
    z-index: 1;
    color: #fff;
    padding: 10px 18px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    opacity: 0;
    pointer-events: none;
    background: ${({ backgroundHover }) => backgroundHover};
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &::before {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      background: ${({ backgroundHover }) => backgroundHover};
      left: 50%;
      bottom: -6px;
      transform: translateX(-50%) rotate(45deg);
      transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  &:hover .tooltip {
    margin-top: 10px;
    margin-bottom: 25px;
    opacity: 1;
    pointer-events: auto;
    cursor: default;
  }
  a {
    text-decoration: none;
    color: black;
  }
  &:hover span {
    color: #fff;
    background: ${({ backgroundHover }) => backgroundHover};
  }
  &:hover span,
  .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
  }
`;
