import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import codingIcon from '/images/coding-icon.png';
import designIcon from '/images/design-icon.png';
import languageIcon from '/images/language-icon.png';
// import gameIcon from '/images/videogame-icon.png';
// import starIcon from '/images/star-icon.png';
import htmlLogo from '/images/htmllogo.svg';
import cssLogo from '/images/csslogo.svg';
import sassLogo from '/images/sasslogo.svg';
import phpLogo from '/images/phplogo.svg';
import reactLogo from '/images/reactlogo.svg';
import jsLogo from '/images/jslogo.svg';
import sqlLogo from '/images/sqllogo.svg';
import fzLogo from '/images/fzlogo.svg';
import npmLogo from '/images/npmlogo.svg';
import wpLogo from '/images/wplogo.svg';
import woocommerceLogo from '/images/woocommercelogo.svg';
import shopifyLogo from '/images/shopifylogo.svg';
import figmaLogo from '/images/figmalogo.svg';
import xdLogo from '/images/xdlogo.svg';
import psLogo from '/images/photoshoplogo.svg';
import illLogo from '/images/illlogo.svg';
import canvaLogo from '/images/canvalogo.svg';

function AboutTabs() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const languages = [
    <img
      src={htmlLogo}
      alt="HTML5 Icon"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={cssLogo}
      alt="CSS3 Icon"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={sassLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={phpLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={reactLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={jsLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={htmlLogo}
      alt="HTML5 Icon"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={cssLogo}
      alt="CSS3 Icon"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={sassLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={phpLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={reactLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={jsLogo}
      alt="Icon to represent languages"
      className="lang-icon-non-invert logos"
      width="60px"
    />,
  ];
  const developmentTools = [
    <img
      src={sqlLogo}
      alt="MySQL Icon"
      className="coding-icon logos"
      width="60px"
    />,
    <img
      src={fzLogo}
      alt="FileZilla Icon"
      className="coding-icon logos"
      width="60px"
    />,
    <img
      src={npmLogo}
      alt="NPM Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={wpLogo}
      alt="Wordpress Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={shopifyLogo}
      alt="MySQL Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={woocommerceLogo}
      alt="Woocommerce Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={sqlLogo}
      alt="MySQL Icon"
      className="coding-icon logos"
      width="60px"
    />,
    <img
      src={fzLogo}
      alt="FileZilla Icon"
      className="coding-icon logos"
      width="60px"
    />,
    <img
      src={npmLogo}
      alt="NPM Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={wpLogo}
      alt="Wordpress Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={shopifyLogo}
      alt="MySQL Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={woocommerceLogo}
      alt="Woocommerce Icon"
      className="coding-icon-non-invert logos"
      width="60px"
    />,
  ];
  const designTools = [
    <img
      src={figmaLogo}
      alt="Figma Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={xdLogo}
      alt="Adobe XD Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={psLogo}
      alt="Photoshop Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={illLogo}
      alt="Adobe Illustrator Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={canvaLogo}
      alt="Canva Icon"
      className="design-icon logos"
      width="60px"
    />,
    <img
      src={figmaLogo}
      alt="Figma Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={xdLogo}
      alt="Adobe XD Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={psLogo}
      alt="Photoshop Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={illLogo}
      alt="Adobe Illustrator Icon"
      className="design-icon-non-invert logos"
      width="60px"
    />,
    <img
      src={canvaLogo}
      alt="Canva Icon"
      className="design-icon logos"
      width="60px"
    />,
  ];
  //   const videoGames = [
  //     <img
  //       src={valLogo}
  //       alt="Icon to represent games"
  //       className="game-icon-non-invert"
  //       width="40px"
  //     />,
  //     <img
  //       src={genshinLogo}
  //       alt="Icon to represent games"
  //       className="game-icon"
  //       width="60px"
  //     />,
  //     'Honkai: Star Rail',
  //     'Osu!',
  //     'Animal Crossing',
  //     'Minecraft',
  //     'Call of Duty',
  //   ];
  //   const hobbies = [
  //     'Baking',
  //     'Dancing',
  //     'Making Spotify Playlists',
  //     'Scrolling on Pinterest',
  //     'Going on Walks',
  //     'Language Learning',
  //     'Digital Art',
  //   ];

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <span key={index} className="skill-items">
        {item}
        {index !== items.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  return (
    <div className="tabs-wrapper home-grid-wrapper">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="column-tabs"
      >
        <ul className="ul-tabs">
          <li
            className={`${toggle == 1 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(1)}
          >
            <img
              src={languageIcon}
              alt="Icon to represent languages"
              className="lang-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 2 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(2)}
          >
            <img
              src={codingIcon}
              alt="Icon to represent development tools"
              className="coding-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 3 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(3)}
          >
            <img
              src={designIcon}
              alt="Icon to represent design tools"
              className="design-icon"
              width="40px"
            />
          </li>
          {/* <li
            className={`${toggle == 4 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(4)}
          >
            <img
              src={gameIcon}
              alt="Icon to represent games"
              className="game-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 5 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(5)}
          >
            <img
              src={starIcon}
              alt="Icon to represent hobbies"
              className="star-icon"
              width="40px"
            />
          </li> */}
        </ul>

        <div className={`tabs-content ${toggle === 1 && 'show-content'} `}>
          <h2>Languages</h2>
          <p className="list-render">{renderListItems(languages)}</p>
        </div>

        <div className={`tabs-content ${toggle === 2 && 'show-content'} `}>
          <h2>Development Tools</h2>
          <p className="list-render">{renderListItems(developmentTools)}</p>
        </div>

        <div className={`tabs-content ${toggle === 3 && 'show-content'} `}>
          <h2>Design Tools</h2>
          <p className="list-render">{renderListItems(designTools)}</p>
        </div>
        {/* <div className={`tabs-content ${toggle === 4 && 'show-content'} `}>
          <h2>Video Games</h2>
          <p className="list-render">{renderListItems(videoGames)}</p>
        </div>
        <div className={`tabs-content ${toggle === 5 && 'show-content'} `}>
          <h2>Hobbies</h2>
          <p className="list-render">{renderListItems(hobbies)}</p>
        </div> */}
      </motion.div>
    </div>
  );
}

export default AboutTabs;
