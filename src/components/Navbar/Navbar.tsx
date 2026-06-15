import { useState } from "react";
import NavElement from "../NavElement/NavElement";
import "./Navbar.css";

const Navbar = () => {
  // create a map where the key is a number corresponding to the selected nav element and the value is a string representing the color scheme
  // let colorMap = new Map<number, string[]>([
  //   [
  //     0,
  //     [
  //       "--name-color",
  //       "#AFAFAF",
  //       "--main-bg-color",
  //       "#131415",
  //       "--card-hover-color",
  //       "#222425",
  //       "--card-hover-border-color",
  //       "#000000",
  //       "--card-special-text-color",
  //       "#5A5A5A",
  //       "--bubble-bg-color",
  //       "#1D1E1F",
  //       "--bubble-text-color",
  //       "#747474",
  //       "--link-text-hover-color",
  //       "#383E43",
  //       "--resume-button-color-1",
  //       "#0BD3EB",
  //       "--resume-button-color-2",
  //       "#0B77EB",
  //       "--resume-button-color-3",
  //       "#1A4CDB",
  //       "--link-button-color",
  //       "#A3AEB4",
  //       "--home-section-color",
  //       "#54585A",
  //       "--home-section-hover-color",
  //       "#B2B2B2",
  //     ],
  //   ],
  //   [
  //     898,
  //     [
  //       "--name-color",
  //       "#C0C2C6",
  //       "--main-bg-color",
  //       "#222429",
  //       "--card-hover-color",
  //       "#32343B",
  //       "--card-hover-border-color",
  //       "#1D1E20",
  //       "--card-special-text-color",
  //       "#65676E",
  //       "--bubble-bg-color",
  //       "#29292C",
  //       "--bubble-text-color",
  //       "#54545A",
  //       "--link-text-hover-color",
  //       "#585D69",
  //       "--resume-button-color-1",
  //       "#818285",
  //       "--resume-button-color-2",
  //       "#515155",
  //       "--resume-button-color-3",
  //       "#3A3A3C",
  //       "--link-button-color",
  //       "#71A3EA",
  //       "--home-section-color",
  //       "#757C87",
  //       "--home-section-hover-color",
  //       "#D2D9E2",
  //     ],
  //   ],
  //   [
  //     1,
  //     [
  //       "--name-color",
  //       "#BFD3F9",
  //       "--main-bg-color",
  //       "#0F182D",
  //       "--card-hover-color",
  //       "#162341",
  //       "--card-hover-border-color",
  //       "#0E1933",
  //       "--card-special-text-color",
  //       "#41ABE9",
  //       "--bubble-bg-color",
  //       "#042A55",
  //       "--bubble-text-color",
  //       "#03C2FF",
  //       "--link-text-hover-color",
  //       "#179AB4",
  //       "--resume-button-color-1",
  //       "#0BD3EB",
  //       "--resume-button-color-2",
  //       "#0B77EB",
  //       "--resume-button-color-3",
  //       "#1A4CDB",
  //       "--link-button-color",
  //       "#71A3EA",
  //       "--home-section-color",
  //       "#506787",
  //       "--home-section-hover-color",
  //       "#AFC5E4",
  //     ],
  //   ],
  //   [
  //     2,
  //     [
  //       "--name-color",
  //       "#AFAFAF",
  //       "--main-bg-color",
  //       "#131415",
  //       "--card-hover-color",
  //       "#222425",
  //       "--card-hover-border-color",
  //       "#000000",
  //       "--card-special-text-color",
  //       "#5A5A5A",
  //       "--bubble-bg-color",
  //       "#1D1E1F",
  //       "--bubble-text-color",
  //       "#747474",
  //       "--link-text-hover-color",
  //       "#383E43",
  //       "--resume-button-color-1",
  //       "#0BD3EB",
  //       "--resume-button-color-2",
  //       "#0B77EB",
  //       "--resume-button-color-3",
  //       "#1A4CDB",
  //       "--link-button-color",
  //       "#A3AEB4",
  //       "--home-section-color",
  //       "#54585A",
  //       "--home-section-hover-color",
  //       "#B2B2B2",
  //     ],
  //   ],
  // ]);

  const [activeIndex] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const changeColorScheme = (index: any) => {
  //   let colorScheme = colorMap.get(1); // Force map entry 1, changing color is broken
  //   if (colorScheme) {
  //     for (let i = 0; i < colorScheme.length; i += 2) {
  //       document.body.style.setProperty(colorScheme[i], colorScheme[i + 1]);
  //     }
  //   }
  // };

  // const handleScrollEvent = () => {
  //   const position = window.scrollY;

  //   const about = document.getElementById("about");
  //   const experience = document.getElementById("experience");
  //   // const skills = document.getElementById("skills");
  //   const projects = document.getElementById("projects");

  //   if (about && position < about.getBoundingClientRect().bottom) {
  //     setActiveIndex(0);
  //     changeColorScheme(0);
  //   } else if (
  //     experience &&
  //     position < experience.getBoundingClientRect().bottom + 600
  //   ) {
  //     setActiveIndex(1);
  //     changeColorScheme(1);
  //   }
  //   // else if (
  //   //   skills &&
  //   //   position < skills.getBoundingClientRect().bottom + 1500
  //   // ) {
  //   //   setActiveIndex(2);
  //   // }
  //   else {
  //     setActiveIndex(2);
  //     changeColorScheme(2);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollEvent, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollEvent);
  //   };
  // }, []);

  return (
    <>
      <div className="pt-5 navbar-custom">
        <NavElement index={0} activeIndex={activeIndex} hrefId="#about">
          About Me
        </NavElement>
        <NavElement index={1} activeIndex={activeIndex} hrefId="#experience">
          Experience
        </NavElement>
        {/* <NavElement index={2} activeIndex={activeIndex} hrefId="#skills">
          Skills
        </NavElement> */}
        <NavElement index={2} activeIndex={activeIndex} hrefId="#projects">
          Projects
        </NavElement>
      </div>
    </>
  );
};

export default Navbar;
