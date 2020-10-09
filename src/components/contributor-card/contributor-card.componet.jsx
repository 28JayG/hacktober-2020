import React from 'react';
import faker from 'faker';

import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './contributor-card.component.css';

const ContributorCard = ({
  name,
  occupation,
  socialMediaURLs,
  featureImageURL,
}) => {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className='card'>
      <img src={featureImageURL} className='profile-image' alt='profile' />
      <h6 className='name'>{name ? name : faker.name.findName()}</h6>
      <span className='occupation'>{occupation ? occupation : ''}</span>
      <div className='social-media-row'>
        <a href={socialMediaURLs ? socialMediaURLs.instagram : '/'}>
          <FaInstagram size={32} color='white' />
        </a>
        <a href={socialMediaURLs ? socialMediaURLs.linkedin : '/'}>
          <FaLinkedin size={32} color='white' />
        </a>
        <a href={socialMediaURLs ? socialMediaURLs.github : '/'}>
          <FaGithubSquare size={32} color='white' />
        </a>
      </div>
    </div>
  );
};

export default ContributorCard;
