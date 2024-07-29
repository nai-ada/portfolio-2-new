import React from 'react';
import { Link } from 'react-router-dom';

function SocialMediaLink({ url, imageUrl, altText, className }) {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} width="35px" className={className} />
    </Link>
  );
}

export default SocialMediaLink;
