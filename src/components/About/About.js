import React from "react";

import {
  Section,
  SectionSubText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <>
      <SectionDivider />
      <Section id='about'>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubText>
          Hello, my name is Erica! I'm a front-end leaning, full stack developer
          based in Louisiana. Continuously fueled by my entrepreneurial
          attitude, I bring focus to producing results-driven development. I
          have the mindfulness to determine when to be a leader, but also the
          ability to recognize when to play an equal role on the team. Eager to
          build on my academic foundations, I consider myself a 'forever
          student'. Currently, I'm seeking employment as a developer and I'm
          always interested in a challenge! Feel free to connect with me!
        </SectionSubText>
      </Section>
    </>
  );
};

export default About;
