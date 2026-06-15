import "./NavElement.css";
import "../../App.css";

interface Props {
  index: number;
  activeIndex: number;
  children: string;
  hrefId: string;
}

const NavElement = ({ index, activeIndex, children, hrefId }: Props) => {
  return (
    <>
      <a
        className={
          index === activeIndex
            ? "nav-element-custom active my-2"
            : "nav-element-custom  my-2"
        }
        href={hrefId}
      >
        {/* <div className="nav-link-bar bar1"></div> */}
        <span className="nav-link-text">{children}</span>
        {/* <div className="nav-link-bar bar2"></div> */}
      </a>
    </>
  );
};

export default NavElement;
