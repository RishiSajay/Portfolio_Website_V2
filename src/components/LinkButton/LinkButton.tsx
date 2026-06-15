import "./LinkButton.css";

interface Props {
  children?: string;
  link?: string;
}

const Button = ({ children, link }: Props) => {
  return (
    <a
      className="btn link-button-1 me-3"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
