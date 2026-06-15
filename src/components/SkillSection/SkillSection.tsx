import Skill from "../Skill/Skill";
import "./SkillSection.css";

const SkillSection = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center skill-section mt-5"
        id="skills"
      >
        <div className="custom-skills-container d-flex justify-content-center">
          <Skill name="Java" level="c4"></Skill>
          <Skill name="Python" level="c4"></Skill>
          <Skill name="C++" level="c4"></Skill>
          <Skill name="AWS" level="c4"></Skill>
          {/* (DDB, SQS, S3, IAM, Lambda, API Gateway, EMR, Amplify, CodeDeploy, CloudWatch */}
          <Skill name="React" level="c3"></Skill>
          <Skill name="JavaScript" level="c3"></Skill>
          <Skill name="TypeScript" level="c3"></Skill>
          <Skill name="HTML" level="c3"></Skill>
          <Skill name="CSS" level="c2"></Skill>
          <Skill name="Unity" level="c2"></Skill>
          <Skill name="C#" level="c2"></Skill>
          <Skill name="Sklearn" level="c2"></Skill>
          <Skill name="Django" level="c1"></Skill>
          <Skill name="Kivy/KivyMD" level="c1"></Skill>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
