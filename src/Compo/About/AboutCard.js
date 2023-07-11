import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { context } from "../../utility/ContextProvider";

function AboutCard() {
  const {textcolour} =useContext(context)
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p  style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className={textcolour} id='user-detail-name'   >Disha Gupta </span>
            from <span className={textcolour}> Agra, UP , India.</span>
            <br />I am a techie developing career in Tech.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Talking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className={textcolour}>
          “Little things don’t mean a lot, they mean everything.”{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;