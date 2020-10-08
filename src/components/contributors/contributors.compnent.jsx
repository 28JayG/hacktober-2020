import React from 'react';
import ContributorCard from '../contributor-card/contributor-card.componet';

import './contributors.component.css'

const Contributors = () => (
    <div className='contributors'>
        <h3 className='title'>Contributors</h3>
        <div className='cards-wrapper'>
            <ContributorCard />
            <ContributorCard />
            <ContributorCard />
            <ContributorCard />
        </div>
    </div>
);

export default Contributors;