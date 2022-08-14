import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StickySun = styled.span<{
  top?: string;
  left?: string;
  horizontalPosition?: boolean;
}>`
  ${(props) => css`
    height: 10px;
    width: 3px;
    border-radius: 20px;
    background: orange;
    transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
    position: absolute;
    top: ${props.top || "unset"};
    left: ${props.left || "unset"};
    transform: translate(-50%, -50%)
      ${props.horizontalPosition && "rotate(-90deg)"};
  `}
`;

export const ContainerSun = styled.div`
  background: #ffff00;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:hover span {
    top: 50%;
    bottom: 0px;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%) rotate(90deg);
    background: yellow;
  }
`;

export const ContainerMoon = styled.div`
  background: #c9c9c9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;

  &:before {
    content: "";
    transition: all ease 0.2s;
    position: absolute;
    background: #91a3b0;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: 5px;
    left: 6px;
  }
  &:after {
    content: "";
    transition: all ease 0.2s;
    position: absolute;
    background: #91a3b0;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    bottom: 5px;
    right: 8px;
  }
`;
