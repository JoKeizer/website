import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animations'

const OurWork = () => {
  const location = useLocation();

  return(
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
        <Movie>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <HideContainer>
            <motion.img variants={photoAnim} src={athelete} alt="athelete" />
            </HideContainer>
          </Link>
        </Movie>
        <Movie>
          <h2>The racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
          <HideContainer>
            <img src={theracer} alt="theracer" />
          </HideContainer>
          </Link>
        </Movie>
        <Movie>
          <h2>goodtimes</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Work>
  )
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #FFD42D;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const HideContainer = styled.div`
  overflow: hidden;
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;