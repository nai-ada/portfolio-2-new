import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../index';

function Contact() {
  return (
    <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.7}}
  
    className="contact-section-container">
      <div className="contact-section" id="contact">
          <h1>Want to Connect?</h1>
          <h3>Let's Create Something New.</h3>
          <p>I am always thrilled to take on a new project. If you would like to see your vision come to life, you can find me on LinkedIn and Instagram. Feel free to also check out more of my works on GitHub, or chat with me via Email for inquiries.</p>
      </div>
    </motion.div>
  );
}

export default Contact;
