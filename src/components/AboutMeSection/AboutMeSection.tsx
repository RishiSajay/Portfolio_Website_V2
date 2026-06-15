import AboutMe from "../AboutMe/AboutMe";
import ResumeButton from "../ResumeButton/ResumeButton";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <>
      <div className="about-me-section" id="about">
        <AboutMe></AboutMe>
        <ResumeButton></ResumeButton>
      </div>
    </>
  );
};

export default AboutMeSection;
