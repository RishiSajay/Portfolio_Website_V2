import LinkText from "../LinkText/LinkText";

const AboutMe = () => {
  return (
    <>
      <div className="col my-4">
        <p className="about-regular-text">
          Welcome readers. I am a UF graduate with a BS in Computer Science and
          a minor in Mathematics.
        </p>
        <p className="about-regular-text">
          My first time coding was in high school, at a weekend python class at
          the local college near me. My weekend hobby turned into my passion
          once I started undergrad. Currently I am working at{" "}
          <LinkText link="https://aws.amazon.com/">AWS</LinkText> to build cloud
          solutions for big data analytics.
        </p>
        <p className="about-regular-text">
          My expertise lies in distributed systems, distributed databases, SQL
          execution optimization, and cloud microservice architecture.
        </p>
        <p className="about-regular-text">
          This website is a medium to showcase my skills and passion for
          computer science. I hope you enjoy what you see, and I always
          appreciate feedback. Thank you!
        </p>
      </div>
    </>
  );
};

export default AboutMe;
