import "./ExperienceCard.css";
import InfoBubble from "../InfoBubble/InfoBubble";

interface Props {
  date: string;
  title: any;
  position: string;
  content: any[];
  builtWith: string[];
}

const ExperienceCard = ({
  date,
  title,
  position,
  content,
  builtWith,
}: Props) => {
  return (
    <>
      <div className="card experience-card mb-2 bg-custom-dark border-0">
        <div className="card-body">
          <h6 className="card-position date-text mb-2">{date}</h6>
          <h5 className="card-title title-text mb-2">{title}</h5>
          <h6 className="card-position mb-2 regular-text">{position}</h6>
          <ul className="mb-4">
            {content.map((sentence) => (
              <li className="regular-text">{sentence}</li>
            ))}
          </ul>
          {builtWith.map((technology) => (
            <InfoBubble>{technology}</InfoBubble>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
