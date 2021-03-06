
import React from 'react'
import homeImg1 from '../img/home1.png';
import Wave from "./Wave";
//Styled
import {LayoutSection, Descriptions, Image, Hide} from '../styles'

//Framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animations";

const AboutSection = () => {
  return (
    <LayoutSection>
      <Descriptions>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>your <span>dreams </span>come</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>   
        Contact us for any photography or videography ideas that you have. We
        have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Descriptions>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1}  alt="image" />
      </Image>
      <Wave/>
    </LayoutSection>
  )
}

export default AboutSection;

