import React from 'react';
import '../../App.css';
import CardProduct from '../CardProduct';
import table1 from '../../images/table1.jpg';
import table2 from '../../images/table2.jpg';
import table3 from '../../images/table3.jpg';
import table4 from '../../images/table4.jpg';
import sofa1 from '../../images/sofa1.png';
import sofa2 from '../../images/sofa2.png';
import sofa3 from '../../images/sofa3.jpg';
import sofa4 from '../../images/sofa4.png';
import sofa5 from '../../images/sofa5.png';
import '../Cards.css';
import '../CustomCarousel.css';
import { Typography, Divider } from '@material-ui/core';
import CustomCarousel from '../CustomCarousel';

let tileDataTable = [
  {
    src: table1,
    title: 'Zaptos Table',
    author: 'Giovanni',
    text: 'This table has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: table2,
    title: 'Ardos Table',
    author: 'Rockfont',
    text: 'This table has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: table3,
    title: 'Ripion Table',
    author: 'Vastrond',
    text: 'This table has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: table4,
    title: 'Idrofuge',
    author: 'Gustavo Menini',
    text: 'This table has been made with authentic ply wood, merged with sectioned arbitraty data',
  }
];

let tileDataSofa = [
  {
    src: sofa1,
    title: 'Zaptos Sofa',
    author: 'Giovanni',
    text: 'This sofa has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: sofa2,
    title: 'Ardos Sofa',
    author: 'Rockfont',
    text: 'This sofa has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: sofa3,
    title: 'Ripion Sofa',
    author: 'Vastrond',
    text: 'This sofa has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: sofa4,
    title: 'Idrofuge',
    author: 'Gustavo Menini',
    text: 'This sofa has been made with authentic ply wood, merged with sectioned arbitraty data',
  },
  {
    src: sofa5,
    title: 'Cartigano',
    author: 'Pellini Zucker',
    text: 'This sofa has been made with authentic ply wood, merged with sectioned arbitraty data',
  }
]


export default function Products() {
  return (
    <>
      <div className="carousel-image">
        <CustomCarousel />
      </div>
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <Typography
              variant={'h4'}
              style={{
                marginTop: '4em',
                marginBottom: '0.5em',
                fontSize: '20px',
                textAlign: 'center'
              }}>
              Venician Tables
              </Typography>
            <Divider style={{ marginBottom: '10px', width: '50%', marginLeft: '25%' }} />
            <ul className='cards__items'>
              <CardProduct
                tile={tileDataTable[0]}
                src={table1}
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
              />
              <CardProduct
                tile={tileDataTable[1]}
                src={table2}
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
              <CardProduct
                tile={tileDataTable[3]}
                src={table2}
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul>
            <Typography
              variant={'h4'}
              style={{
                marginTop: '4em',
                marginBottom: '0.5em',
                fontSize: '20px',
                textAlign: 'center'
              }}>
              Turinian Collection
              </Typography>
            <Divider style={{ marginBottom: '10px', width: '50%', marginLeft: '25%' }} />
            <ul className='cards__items'>
              <CardProduct
                tile={tileDataSofa[0]}
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardProduct
                tile={tileDataSofa[1]}
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardProduct
                tile={tileDataSofa[2]}
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
            <Typography
              variant={'h4'}
              style={{
                marginTop: '4em',
                marginBottom: '0.5em',
                fontSize: '20px',
                textAlign: 'center'
              }}>
              Florentian Collection
            </Typography>
            <Divider style={{ marginBottom: '10px', width: '50%', marginLeft: '25%' }} />
            <ul className='cards__items'>
              <CardProduct
                tile={tileDataTable[2]}
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardProduct
                tile={tileDataSofa[3]}
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardProduct
                tile={tileDataSofa[4]}
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
