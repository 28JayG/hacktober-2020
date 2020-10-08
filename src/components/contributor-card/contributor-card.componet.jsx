import React from 'react';
import faker from 'faker';

import { FaDocker, FaInstagram } from 'react-icons/fa';

import './contributor-card.component.css';

const ContributorCard = ({
  name,
  occupation,
  socialMediaURLs,
  featureImageURL,
}) => {
  return (
    <div className='card'>
      <img
        src={faker.image.avatar()}
        className='profile-image'
        alt='profile photo'
      />
      <h6 className='name'>{faker.name.findName()}</h6>
      <span className='occupation'>{'enterpenuere'}</span>
      <div className='social-media-row'>
        <FaInstagram size={32} color='white' />
        <FaInstagram size={32} color='white' />
        <FaInstagram size={32} color='white' />
      </div>
    </div>
  );
};

export default ContributorCard;
