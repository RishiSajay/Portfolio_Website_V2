interface Props {
  children: string;
}

const InfoBubble = ({ children }: Props) => {
  return (
    <small className="d-inline-flex me-2 mb-2 px-2 py-1 fw-semibold text-info-bubble-1 bg-info-bubble-1 border-info-subtle rounded-5">
      {children}
    </small>
  );
};

export default InfoBubble;
