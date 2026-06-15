import "./Skill.css";

interface Props {
  name: string;
  level: string;
}

const Skill = ({ name, level }: Props) => {
  var text = "";
  if (level == "Expert") {
    text = "Really good";
  } else if (level == "Advanced") {
    text = "Pretty good";
  } else if (level == "Intermediate") {
    text = "Good";
  } else {
    text = "Good (beginner) :)";
  }
  return (
    <>
      <div className="skill-container mx-3 mb-4">
        <div id="banner">
          <div className={"fill" + " " + level}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
              enable-background="new 0 0 300 300"
            >
              <path
                fill="#04ACFF"
                id="waveShape"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </svg>
          </div>
        </div>
        <p
          className={
            name.length > 7
              ? "fs-6 fw-bold skill-name font-monospace"
              : "fs-5 fw-bold skill-name font-monospace"
          }
        >
          {name}
        </p>
        {/* <p className="fs-6 skill-level">{text}</p> */}
      </div>
    </>
  );
};

export default Skill;
