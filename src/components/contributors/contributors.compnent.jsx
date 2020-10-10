import React from 'react';
import { contributers } from '../../data/contributers';
import ContributorCard from '../contributor-card/contributor-card.componet';

import './contributors.component.css';

const Contributors = () => (
  <div className='contributors-wrap'>
    <div className='contributors'>
      <h3 className='title'>Contributors</h3>
      <div className='cards-wrapper'>
        <ContributorCard {...contributers['28JayG']} />
      </div>
    </div>
  </div>
);

export default Contributors;
