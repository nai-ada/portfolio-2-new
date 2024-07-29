import React from 'react';
import SocialMediaLink from './SocialMediaLink';
import instagramLogo from '/images/ig-logo.png';
import githubLogo from '/images/github.png';
import linkedinLogo from '/images/linkedin.png';
import heartImage from '/images/heart.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-links">
        <SocialMediaLink
          url="https://www.instagram.com/"
          imageUrl={instagramLogo}
          altText="Instagram Logo"
          className="social-icon"
        />
        <SocialMediaLink
          url="https://github.com/nai-ada"
          imageUrl={githubLogo}
          altText="GitHub Logo"
          className="social-icon"
        />
        <SocialMediaLink
          url="https://linkedin.com/in/nadiavespalec"
          imageUrl={linkedinLogo}
          altText="LinkedIn Logo"
          className="social-icon"
        />
      </div>

      <div className="email-container">
        <a href="mailto:nadiavespalec00@gmail.com" className="email-link">Send me an email</a>
        <img src={heartImage} alt="heart" className="heart-image" width="25px" />
      </div>
      
      <p className="copyright">&copy; Nadia Vespalec 2024</p>
      
    </div>
  );
}

export default Footer;
