import Navbar from "../Navbar/Navbar";
import Socials from "../Socials/Socials";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <>
      <div className="sticky-top container d-flex align-items-center justify-content-center text-start home-section">
        <div className="custom-container">
          <h1 className="name">Rishi Sajay</h1>
          <h3 className="name-subtitle">Software Engineer</h3>
          <Navbar></Navbar>
          <Socials></Socials>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
