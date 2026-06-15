interface Props {
  link: string;
  children: string;
}

const LinkText = ({ link, children }: Props) => {
  return (
    <>
      <a
        href={link}
        className="link-text"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </>
  );
};

export default LinkText;
