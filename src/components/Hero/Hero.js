import React from "react";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { Div3, SocialIcons, Button } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section nopadding>
      {/* <LeftSection> */}
      <SectionTitle main center>
        Hi There, I'm Erica!
      </SectionTitle>
      <SectionText>
        <b>Software Developer.</b> <br />
        Bringing innovation through creativity and collaboration.
      </SectionText>
      <Div3>
        <div class='wrapper'>
          <div class='icon linkedin'>
            <div class='tooltip'>Linkedin</div>
            <span>
              <i class='fab fa-linkedin-f'>
                <SocialIcons href='https://www.linkedin.com/in/ekrebs1/'>
                  <FaLinkedin size='3rem' />
                </SocialIcons>
              </i>
            </span>
          </div>
          <div class='icon twitter'>
            <div class='tooltip'>Twitter</div>
            <span>
              <i class='fab fa-twitter'>
                <SocialIcons href='https://twitter.com/EricaKrebs1'>
                  <FaTwitter size='3rem' />
                </SocialIcons>
              </i>
            </span>
          </div>
          <div class='icon github'>
            <div class='tooltip'>Github</div>
            <span>
              <i class='fab fa-github'>
                <SocialIcons href='https://github.com/ekrebs1'>
                  <FaGithub size='3rem' />
                </SocialIcons>
              </i>
            </span>
          </div>
        </div>
        <Button href='https://drive.google.com/file/d/1-yxKeRy2Jcw2QEtipbngqKBuElXOpAHt/view?usp=sharing'>
          Resume
        </Button>
      </Div3>
      {/* </LeftSection> */}
    </Section>
  </>
);

export default Hero;
