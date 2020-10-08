import React from 'react';

import Contributors from '../../components/contributors/contributors.compnent';

import './home.compnent.css';

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <div className='header-wrapper'>
        <div className='header-container'>
          <h3 className='title'>The Journey</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            ipsum sed nibh finibus placerat. Quisque bibendum tempus consequat.
            Vestibulum quis metus mi. In et arcu efficitur, volutpat massa ut,
            feugiat lorem.
          </p>
        </div>
      </div>
      <Contributors />
    </div>
  );
};

export default Homepage;
