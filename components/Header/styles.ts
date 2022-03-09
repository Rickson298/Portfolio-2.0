import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.2s;
  display: flex;
  width: 100vw;

  .header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.textPrimary};

    width: 1280px;
    align-items: center;
    padding: 15px 25px;
    ul {
      display: flex;
      list-style: none;
      gap: 15px;

      li {
        position: relative;
        a {
          cursor: pointer;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            height: 1px;
            bottom: -7px;
            left: 0;
            background-color: gold;
            -webkit-transform-origin: bottom right;
            transform-origin: bottom right;
            -webkit-transition: -webkit-transform 0.4s
              cubic-bezier(0.86, 0, 0.07, 1);
            transition: -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1),
              -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
          }
          &:hover::after {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
          }
        }
      }
    }
  }
`;
