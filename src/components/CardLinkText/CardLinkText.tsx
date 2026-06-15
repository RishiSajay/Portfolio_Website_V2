interface Props {
  link: string;
  children: string;
}

const CardLinkText = ({ link, children }: Props) => {
  return (
    <>
      <a
        href={link}
        className="card-link-text"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </>
  );
};

export default CardLinkText;
