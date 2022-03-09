import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import * as C from "./styles";

export const Introduction = () => {
  return (
    <C.Container>
      <div className="apresentation">
        <span>
          <span>Olá, eu sou o</span>
          <h1>Rickson Oliveira</h1>
        </span>
        <span>
          <span className="animacao-pisca">Desenvolvedor Front end</span>
        </span>
      </div>
      <div className="wrapper">
        <SocialIcon
          backgroundHover="#0e76a8"
          titleTooltip="Linkedin"
          icon={<RiLinkedinFill />}
          href="https://www.linkedin.com/in/rickson-oliveira-dev/"
        />
        <SocialIcon
          backgroundHover="#34af23"
          titleTooltip="WhatsApp"
          icon={<FaWhatsapp />}
          href="https://wa.me/+5519988208737?text=Ol%C3%A1,%20podemos%20conversar?"
        />
        <SocialIcon
          backgroundHover="#333"
          titleTooltip="GitHub"
          icon={<AiFillGithub />}
          href="https://github.com/Rickson298"
        />
      </div>
    </C.Container>
  );
};
