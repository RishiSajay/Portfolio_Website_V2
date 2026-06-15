import "./ProjectCard.css";
import "../../App.css";
import LinkButton from "../LinkButton/LinkButton";
import InfoBubble from "../InfoBubble/InfoBubble";

interface Props {
  projectName: string;
  imageLink?: string;
  children: string;
  link1Name: string;
  link1: string;
  link2Name?: string;
  link2?: string;
  builtWith: string[];
}
const ProjectCard = ({
  projectName,
  imageLink,
  children,
  link1Name,
  link1,
  link2Name,
  link2,
  builtWith,
}: Props) => {
  return (
    <>
      <div className="card project-card mb-2 bg-custom-dark border-0">
        {imageLink != null && (
          <img src={imageLink} className="card-img-top" alt="..."></img>
        )}
        <div className="card-body">
          <h5 className="card-title title-text">{projectName}</h5>
          <p className="card-text regular-text">{children}</p>
          <LinkButton link={link1}>{link1Name}</LinkButton>
          {link2Name != null && (
            <LinkButton link={link2}>{link2Name}</LinkButton>
          )}

          <div className="mt-4">
            {builtWith.map((technology) => (
              <InfoBubble>{technology}</InfoBubble>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
