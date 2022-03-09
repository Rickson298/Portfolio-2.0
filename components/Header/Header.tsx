import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="header">
        <h1>Portfólio</h1>
        <nav>
          <ul>
            <li>
              <a> Sobre mim</a>
            </li>
            <li>
              <a> Projetos</a>
            </li>
            <li>
              <a> Tecnologias</a>
            </li>
            <li>
              <a> Certificados</a>
            </li>
          </ul>
        </nav>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          color="black"
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.textPrimary)}
          onColor={colors.textPrimary}
        />
      </div>
    </Container>
  );
};

export default Header;
