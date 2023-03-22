import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
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