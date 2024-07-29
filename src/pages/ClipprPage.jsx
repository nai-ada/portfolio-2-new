import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import { Link } from 'react-router-dom';
import clipprVid from '/media/clippr-demo.mp4';
import ProjectNav from '../components/ProjectNav';
import clipprHome from '/images/clippr-home.svg';
import clipprFavs from '/images/clippr-favourites.svg';
import clipprSearch from '/images/clippr-search.svg';
import upArrow from '/images/up-arrow.png';
import downArrow from '/images/down-arrow.png';

const ClipprPage = () => {
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
      imageUrl: clipprHome,
      id: '1',
      info: 'DB Home Screen. A featured movie is fetched from the API and displayed with a link to the trailer and a description.',
    },
    {
      imageUrl: clipprSearch,
      id: '2',
      info: 'Users can search for and filter their favourite movies.',
    },
    {
      imageUrl: clipprFavs,
      id: '3',
      info: 'Users can favourite the movies they love.',
    },
  ];

  const toolsUsed = ['React.js', 'SASS', 'Photoshop', 'Adobe XD'];

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
          <h1 className="gg-intro">Clippr DB.</h1>
          <a
            href="https://nadiavespalec.com/clippr-database"
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
                Clippr is a Movie Database Application created with the React
                JavaScript Framework. It utilizes an API connected to the TMDb
                database to gather movies from different genres and sections of
                the website. Clippr includes many different functionalities and
                features, such as a search bar to filter movies and a favourites
                page.
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
                <source src={clipprVid} type="video/mp4" />
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
                This project challenged my skills as a developer, forcing me out
                of my comfort zone by introducing new concepts and ideas. It
                utilizes an API to communicate with the TMDB Database, allowing
                the movie data to be viewed and interactive. Completing this
                project has greatly solidified my team-building skills and has
                helped me to feel more comfortable with the use of GitHub and
                API's.
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

export default ClipprPage;
