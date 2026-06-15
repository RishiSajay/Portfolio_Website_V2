import "./App.css";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import Divider from "./components/Divider/Divider";
import CreditSection from "./components/CreditSection/CreditSection";
import AnimatedCursor from "./components/AnimatedCursor/AnimatedCursor";
// import SkillSection from "./components/SkillSection/SkillSection";

const App = () => {
  return (
    <>
      <div className="container-fluid main-container-custom">
        <AnimatedCursor></AnimatedCursor>
        <div className="row">
          <div className="col left-block">
            <HomeSection></HomeSection>
          </div>
          <div className="col-xl">
            <div className="right-block">
              <AboutMeSection></AboutMeSection>
              <Divider></Divider>
              <ExperienceSection></ExperienceSection>
              <Divider></Divider>
              {/* <SkillSection></SkillSection>
              <Divider></Divider> */}
              <ProjectSection></ProjectSection>
              <Divider></Divider>
              <CreditSection></CreditSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
