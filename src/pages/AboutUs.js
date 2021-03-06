import React from 'react';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animations'

import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
      <AboutSection/>
      <ServiceSection/>
      <FaqSection/>
      <ScrollTop/>
    </ motion.div>
  )
}

export default AboutUs;