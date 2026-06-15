import "./ResumeButton.css";

const ResumeButton = () => {
  return (
    <>
      <button className="resume-button">
        <a
          href="/src/assets/files/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
    </>
  );
};

export default ResumeButton;
