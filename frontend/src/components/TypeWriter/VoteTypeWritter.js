import React from "react";
import Typewriter from "typewriter-effect";

const VoteTypeWritter = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Vote for your favorite songs!")
          .pauseFor(2500)
          .changeDeleteSpeed(120)
          .deleteChars(6)
          .changeDelay(120)
          .typeString("movies!")
          .pauseFor(2500)
          .changeDeleteSpeed(120)
          .deleteChars(7)
          .changeDelay(120)
          .typeString("artists!")
          .pauseFor(2500)
          .changeDeleteSpeed("natural")
          .deleteAll()
          .start();
      }}
    />
  );
};

export default VoteTypeWritter;
