import { useState } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, GoToTopButton } from '../styles/GlobalComponents';

const Home = () => {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)    
    }  
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', checkScrollTop)
  }

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      {showScroll && (
        <GoToTopButton onClick={scrollTop}>&#8593;</GoToTopButton>
      )}
    </Layout>
  );
};

export default Home;
