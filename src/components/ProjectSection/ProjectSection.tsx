import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectSection.css";

const ProjectSection = () => {
  const homeUrl = "http://localhost:5173";
  return (
    <>
      <div className="project-section mt-5" id="projects">
        <ProjectCard
          projectName="PenPals"
          link1Name="Github"
          link1="https://github.com/RishiSajay/PenPals"
          builtWith={[
            "React",
            "Typescript",
            "Google DialogFlow",
            "AWS DynamoDB",
            "AWS Lambda",
            "AWS API Gateway",
            "AWS Amplify",
            "AWS IAM",
            "OpenAI API",
          ]}
        >
          Developed a full stack web application. The product is an interactive
          conversational agent designed to reduce the language-based anxieties
          of conversing during study abroad programs in the host-country's
          language.
        </ProjectCard>
        <ProjectCard
          projectName="TheMove"
          link1Name="Github"
          link1="https://github.com/RishiSajay/TheMove"
          builtWith={["Python", "Django", "Kivy", "KivyMD"]}
        >
          Developed a full stack mobile app to help college students better plan
          their nights. Students can view the most popular places to hang out on
          a day by day basis. Users can view others' plans as well as vote on
          their plans.
        </ProjectCard>
        <ProjectCard
          projectName="ImLiterate"
          link1Name="Github"
          link1="https://github.com/JohnLun/ImLiterate"
          link2Name="Demo"
          link2="https://www.youtube.com/watch?v=yzL9TLE0hr4&ab_channel=ChaseWrenn"
          builtWith={[
            "Python",
            "Django",
            "Google Cloud Vision",
            "Merriam Webster API",
            "HTML",
            "JavaScript",
            "CSS",
            "Bootstrap",
          ]}
        >
          Developed a full stack web application to help kids with unequal
          access to education expand upon their vocabulary and better learn
          English. This project was made for ShellHacks 2022.
        </ProjectCard>

        <ProjectCard
          projectName="Pulsar"
          link1Name="Github"
          link1="https://github.com/RishiSajay/Pulsar"
          link2Name="Play Game"
          link2={"/assets/Pulsar/index.html"}
          builtWith={["Unity", "C#"]}
        >
          Developed a local PvP 2D space fighter game inspired by Tank Trouble.
          Players are pit against each other in a map with lasers, asteroids,
          missiles, and more!
        </ProjectCard>

        <ProjectCard
          projectName="KD Tree"
          link1Name="Github"
          link1="https://github.com/RishiSajay/KDTree"
          builtWith={["C++"]}
        >
          Developed a KD Tree for large scale multidimensional data storage. The
          program creates a KD Tree from a given dataset and then performs a
          range query on the tree, returning all tuples within the query. Please
          refer to the github for a more detailed explanation of KD Trees.
        </ProjectCard>

        <ProjectCard
          projectName="Weather App"
          link1Name="Github"
          link1="https://github.com/RishiSajay/WeatherWebsite"
          link2Name="Go to Site"
          link2={"/assets/WeatherApp/weather.html"}
          builtWith={["HTML", "JavaScript", "CSS", "Open Weather Map API"]}
        >
          Created a website that provides real time weather information based on
          city name or zip code. This was my first personal web dev project.
        </ProjectCard>
      </div>
    </>
  );
};

export default ProjectSection;
