import { React } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import AboutTabs from './AboutTabs';

function About() {
  return (
    <>
      <div className="about-section home-grid-wrapper" id="about">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1 className="about-h1">As A Dev... ฅ^._.^ฅ</h1>

          <h3>I'm always learning something new!</h3>
          <h2>
            Astronomy Nerd. Video Game Lover. Iced Matcha Latte Enthusiast.
            Lover of Rainy Days. INFP. But that's not all!
          </h2>
          <h2>
            As a developer skilled in both technical expertise and creative
            abilities, I am on a mission to design user-friendly websites that
            are both distinctive and intuitive for all users.
          </h2>
          <h2>
            When I'm not learning a new language or spending time with my cat
            Benny, you will find me at my computer beginning another exciting
            project!{' '}
          </h2>
        </motion.div>
        <div className="tech-stack-title">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="tech-stack-heading"
          >
            What is my Tech Stack?
          </motion.h1>
        </div>
        <AboutTabs />
      </div>
    </>
  );
}

export default About;
