
import React from 'react'
import styled from 'styled-components';

import {LayoutSection, Descriptions, Image, Hide} from '../styles'
import Toggle from './Toggle';

const FaqSection = () => {
  return (
    <div>
      <Faq>
        <h2>Any questions <span>FAQ</span></h2>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
      </Faq>
    </div>
  )
}

const Faq = styled(LayoutSection)`
display: block;
span {
  display: block;
}
h2 {
  padding-bottom: 2rem;
  font-weight: lighter;
}
.faq-line {
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
}

.question {
  padding: 1rem 0rem;
  p {
    padding: 1rem 0rem;
  }
}
.answer {
    padding: 1rem 0rem;
    p {
      padding: 0.2rem 0rem;
    }
  }
`;

export default FaqSection;