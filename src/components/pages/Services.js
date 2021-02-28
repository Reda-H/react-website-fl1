import { Button } from '@material-ui/core';
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CustomSlider from '../CustomSlider';
import '../HeroSection.css';

export default function Services() {
  return (
    <>
      <Cards services={true} />
      <div className='hero-container-services'>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        {/* <video src='../../videos/video-1.mp4' autoPlay loop muted /> */}
        <CustomSlider />
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
        </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </>
  // <h1 className='services'>SERVICES</h1>
  );
}
