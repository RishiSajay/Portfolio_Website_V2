import LinkText from "../LinkText/LinkText";

const CreditSection = () => {
  return (
    <>
      <div className="credit-section mt-5"></div>
      <p className="regular-text">
        This website design was inspired by{" "}
        <LinkText link="https://brittanychiang.com/">Brittany Chiang</LinkText>{" "}
        and built by yours truly.
      </p>
      <p className="regular-text">
        This project was built with{" "}
        <LinkText link="https://vitejs.dev/">Vite</LinkText>,{" "}
        <LinkText link="https://react.dev/">React</LinkText>, and{" "}
        <LinkText link="https://getbootstrap.com/">Bootstrap</LinkText>, and
        deployed with{" "}
        <LinkText link="https://pages.github.com/">GitHub Pages</LinkText>.
      </p>
    </>
  );
};

export default CreditSection;
