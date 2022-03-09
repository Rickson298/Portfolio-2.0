import * as C from "./styles";

interface SocialIcon {
  titleTooltip: string;
  icon: JSX.Element;
  href: string;
  backgroundHover: string;
}

export const SocialIcon: React.FC<SocialIcon> = ({
  titleTooltip,
  icon,
  href,
  ...rest
}) => {
  return (
    <C.Container {...rest}>
      <div className="tooltip">{titleTooltip}</div>
      <a href={href} target="_blanked">
        <span>{icon}</span>
      </a>
    </C.Container>
  );
};
