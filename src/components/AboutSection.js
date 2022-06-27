
import React from 'react'
import homeImg1 from '../img/home1.png';

//Styled
import styled from 'styled-components';
import {LayoutSection, Descriptions, Image, Hide} from '../styles'

const AboutSection = () => {
  return (
    <LayoutSection>
      <Descriptions>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams </span>come</h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>   
        Contact us for any photography or videography ideas that you have. We
        have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact us</button>
      </Descriptions>
      <Image>
        <img src={homeImg1}  alt="image" />
      </Image>
    </LayoutSection>
  )
}

export default AboutSection;

