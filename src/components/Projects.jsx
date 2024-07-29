import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import { Link } from 'react-router-dom';
import galaxyImage from '/images/gg.png';
import clipprImage from '/images/clippr.png';
import frothImage from '/images/froth-coming-soon.png';

// variables for displaying various properties of the projects
const projects = [
  {
    name: 'Froth Matcha.',
    imageUrl: frothImage,
    sub: 'WordPress | PHP',
    id: '1',
    link: '/froth-info',
  },
  {
    name: 'Galaxy Grid.',
    imageUrl: galaxyImage,
    sub: 'JavaScript | CSS',
    id: '2',
    link: '/galaxy-grid-info',
  },
  {
    name: 'Clippr DB.',
    imageUrl: clipprImage,
    sub: 'React.js | SASS',
    id: '3',
    link: '/clippr-info',
  },
];

// function for styling purposes
function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getProjectClass = () => {
    if (screenWidth >= 1300) {
      return 'project-container-grid';
    } else {
      return 'project-container';
    }
  };

  return (
    <div className="projects-section" id="works">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="projects-description"
      >
        <h1>Works</h1>
        <h3>On Gaining Experience</h3>
        <h2>
          Working on web development projects with others has been an enriching
          experience, and I am grateful for the opportunity I had to participate
          in an invaluable program at BCIT. This program allowed me to thrive in
          both collaborative and independent environments, providing me with
          real-world problem-solving skills that I am eager to utilize. I not
          only gained valuable insights into different approaches and techniques
          but also discovered a profound passion for JavaScript and frameworks
          such as React.js. I look forward to further expanding my knowledge of
          JavaScript and its libraries and frameworks, such as Three.js and
          GSAP. I am enthusiastic about learning creative programming, as I love
          to approach web development as an art form.
        </h2>
      </motion.div>

      <div className={getProjectClass()}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              <h3 className="projects-title">{project.name}</h3>
              <h2 className="projects-sub">{project.sub}</h2>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="project-image"
              />

              {/* button code modified from Katherine Kato on codepen.io */}
              <div id="container">
                <Link to={project.link}>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
