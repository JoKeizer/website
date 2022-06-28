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
import {pageAnimation} from '../animations'

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
        <Movie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link to="/work/the-athlete">
          <img src={athelete} alt="athelete" />
          </Link>
        </Movie>
        <Movie>
          <h2>The racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
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
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;