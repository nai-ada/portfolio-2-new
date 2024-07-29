import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/images/nadia-logo.png';
import ProjectHamburger from "./ProjectHamburger";

function ProjectNav() {
  return (
    <header id="home">
      <nav>
        <div className="title-and-logo">
        <Link to="/">
          <img src={logoImage} alt="Nadia Vespalec Portfolio Logo" width="50px" className="nadia-logo" />
        </Link>
        <p className='front-end-title'>| Web Design + Development</p>
        </div>
        <div className="menu-nav-header">
          {/* Hamburger can be used as an alternative to revisit other parts of the site, without having to click on the logo to go back home. */}
          {/* <ProjectHamburger/> */}
        </div>
      </nav>
    </header>
  );
}

export default ProjectNav;

