import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { context } from "../../utility/ContextProvider";

function Type() {
  const {textcolour}=useContext(context)
  return (
    <Typewriter className={textcolour}
      options={{
        strings: [
          "Developer",
          "Deep Learner",
          "MERN Stack Developer",
          "Full Stack Developer",
          "Team Collaborator and Contributor",
          "Hope to get in touch!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;