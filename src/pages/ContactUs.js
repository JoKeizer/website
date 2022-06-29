import React from "react";


//Animations
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animations'

import styled from "styled-components"

const ContactUs = () => {
  return(
      <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      >
        <h1>Contact Us</h1>
      </motion.div>

  )
}

export default ContactUs;