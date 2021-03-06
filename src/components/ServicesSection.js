import React from 'react';

//Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//images
import homeImg2 from '../img/home2.png';

//Styles
import styled from 'styled-components';
import {LayoutSection, Descriptions, Image, Hide} from '../styles';

import { fade } from '../animations';

//ScrollAnim
import {useScroll} from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return(
    <Services variants={fade} ref={element} animate={controls} initial={"hidden"}>
      <Descriptions>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Descriptions>
      <Image>
        <img src={homeImg2}  alt="" />
      </Image>

    </Services>

  )
}


const Services = styled(LayoutSection) `
h2 {
  padding-bottom: 5rem;
}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}
`;

const Cards = styled.div `
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
  justify-content: center;
}
`;

const Card = styled.div `
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;