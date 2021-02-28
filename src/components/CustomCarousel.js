import { Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import slide1 from '../images/acoustic.jpg';
import slide2 from '../images/classes.jpg';
import slide3 from '../images/concert.jpg';
// import slide4 from '../images/sofa_background.jpeg';
import slide5 from '../images/workplace.jpg';
import './CustomCarousel.css';

export default function CustomCarousel({}) {
    return(
        <Carousel
            autoPlay={true}
            indicators={false}
            fullHeightHover={true}
            navButtonsAlwaysInvisible
            >
            <div style={{maxHeight: '500px'}}>
                <img src={slide1}/>
                <Typography variant={'h3'} style={{position: 'absolute', bottom: '50%', left: '10%', color: 'rgb(255, 255, 255)', textDecoration: 'underline', backgroundColor: 'rgb(0, 0, 0, 0.1)'}}>DESIGN ACCOUSTIC</Typography>
            </div>
            <div style={{maxHeight: '500px'}}>
                <img src={slide2} />
                <Typography variant={'h3'} style={{ position: 'absolute', bottom: '50%', left: '10%', color: 'rgb(255, 255, 255)', textDecoration: 'underline', backgroundColor: 'rgb(0, 0, 0, 0.1)' }}>DESIGNER TABLES</Typography>
            </div>
            <div style={{maxHeight: '500px'}}>
                <img src={slide3} />
                <Typography variant={'h3'} style={{ position: 'absolute', bottom: '50%', left: '10%', color: 'rgb(255, 255, 255)', textDecoration: 'underline', backgroundColor: 'rgb(0, 0, 0, 0.1)' }}>CONCERT HALLS</Typography>
            </div>
            <div style={{maxHeight: '500px'}}>
                <img src={slide5} />
                <Typography variant={'h3'} style={{ position: 'absolute', bottom: '50%', left: '10%', color: 'rgb(255, 255, 255)', textDecoration: 'underline', backgroundColor: 'rgb(0, 0, 0, 0.1)' }}>WORKPLACE FURNITURE</Typography>
            </div>
            {/* <span style={{paddingTop: '500px'}}></span> */}
        </Carousel>
    );
}