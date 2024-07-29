import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import { Link } from 'react-router-dom';
import galaxyVid from '/media/galaxy-grid-gameplay.mp4';
import ProjectNav from '../components/ProjectNav';
import ggHome from '/images/gg-home.png';
import ggPlayer from '/images/gg-player.png';
import ggCpu from '/images/gg-cpu.png';
import upArrow from '/images/up-arrow.png';
import downArrow from '/images/down-arrow.png';

const GalaxyGridPage = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [showTakeaway, setShowTakeaway] = useState(false);
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

  const projects = [
    {
      imageUrl: ggHome,
      id: '1',
      info: 'Game Home Screen. This is where the fun begins.',
    },
    {
      imageUrl: ggCpu,
      id: '2',
      info: 'CPU Wins. CPU is automatically defaults to O. Each win is worth 10 points.',
    },
    {
      imageUrl: ggPlayer,
      id: '3',
      info: 'Player Wins. Player automatically defaults to X.',
    },
  ];

  const toolsUsed = ['HTML', 'CSS', 'JavaScript'];

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <span key={index} className="skill-items">
        {item}
        {index !== items.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  const dropdownVariants = {
    show: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4 },
    },
    hide: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4 },
    },
  };

  const getProjectClass = () => {
    return screenWidth >= 1300
      ? 'project-container-grid-page'
      : 'project-container';
  };

  return (
    <div id="project-page-top">
      <ProjectNav />

      <div className="galaxy-grid-page">
        <div className="content-container">
          <h1 className="gg-intro">Galaxy Grid.</h1>
          <a
            href="https://nadiavespalec.com/galaxy-grid"
            className="live-button"
          >
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Visit Live Site</span>
            </button>
          </a>
        </div>
        <div id="project-info-section">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div
              className="project-section-heading-container"
              onClick={() => setShowOverview(!showOverview)}
            >
              <h3
                style={{ cursor: 'pointer' }}
                className="project-section-heading"
              >
                Project Overview
              </h3>
              <img
                src={showOverview ? upArrow : downArrow}
                alt="arrow"
                className="up-arrow"
                width="28px"
              />
            </div>
            <motion.div
              variants={dropdownVariants}
              initial="show"
              exit="hide"
              animate={showOverview ? 'show' : 'hide'}
            >
              <h2 className="project-page-description">
                Galaxy Grid is an exciting browser-based tic-tac-toe game built
                entirely with JavaScript. Set in a galactic theme, players
                engage in classic tic-tac-toe battles against a CPU opponent,
                navigating through a visually stunning grid.
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h3
              style={{ cursor: 'pointer' }}
              className="project-section-heading-demo"
            >
              Functionality Demo
            </h3>
            <div className="video-container">
              <video muted autoPlay loop>
                <source src={galaxyVid} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div
              className="project-section-heading-container"
              onClick={() => setShowTakeaway(!showTakeaway)}
            >
              <h3
                style={{ cursor: 'pointer' }}
                className="project-section-heading"
              >
                Project Takeaway
              </h3>
              <img
                src={showTakeaway ? upArrow : downArrow}
                alt="arrow"
                className="up-arrow"
                width="28px"
              />
            </div>
            <motion.div
              variants={dropdownVariants}
              initial="show"
              animate={showTakeaway ? 'show' : 'hide'}
            >
              <h2 className="project-page-description">
                Through the development process of Galaxy Grid, I gained
                invaluable insights into JavaScript, deepening my understanding
                of its core concepts and functionalities. From implementing game
                logic to handling user interactions, every aspect of the project
                served as a learning opportunity, honing my problem-solving
                skills and strengthening my grasp of JavaScript programming.
              </h2>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3
            style={{ cursor: 'pointer' }}
            className="project-section-heading-tools"
          >
            Tools Used
          </h3>
          <h2 className="tools-used-render">{renderListItems(toolsUsed)}</h2>
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
                <img
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  width="70%"
                />
                <h2 className="project-info-h2">{project.info}</h2>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <p className="copyright">&copy; Nadia Vespalec 2024</p>
    </div>
  );
};

export default GalaxyGridPage;
