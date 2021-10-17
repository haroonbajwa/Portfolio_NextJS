import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, MyName } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        I'm Haroon Bajwa <br />
        Web Developer
      </SectionTitle>
      <SectionText>
        I am a React JS and WordPress web developer and have done many projects. I have extensive knowledge of HTML, CSS, Javascript and many other web languages.
      </SectionText>
      <Button onClick={() => window.location="https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;