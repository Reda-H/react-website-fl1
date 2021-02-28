import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import office1 from '../images/office1.jpg';
import office2 from '../images/office2.jpg';
import office3 from '../images/office3.jpg';
import office4 from '../images/office4.jpg';
import office5 from '../images/office5.jpg';

function Cards({ services }) {
  return (
    <div className='cards'>
      {services ?
        <>
          <h1>Check out our services and offers</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/img-9.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Adventure'
                  path='/services'
                  long={'card_long'}
                  background='black'
                  textDecoration='white'
                />
                <CardItem
                  src='images/img-2.jpg'
                  text='Travel through the Islands of Bali in a Private Cruise'
                  label='Luxury'
                  path='/services'
                  long={'card_long'}
                  background='white'
                  textDecoration='black'
                />
                <CardItem
                  src='images/img-2.jpg'
                  text='Travel through the Islands of Bali in a Private Cruise'
                  label='Luxury'
                  path='/services'
                  long={'card_long'}
                  background='black'
                  textDecoration='white'
                />
              </ul>
            </div>
          </div>
        </>
        :
        <>
          <h1>Check out our IDENTITY Package!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  labelHalo={'label__halo'}
                  src={office1}
                  text='Explore the Presidential collection.'
                  label='Presidential'
                  path='/services'
                />
                <CardItem
                  labelHalo={'label__halo'}
                  src={office2}
                  text='Travel through Sleek and Sharp Design.'
                  label="Sleek & Sharp"
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  labelHalo={'label__halo'}
                  src={office3}
                  text='Set Sail in the Unmistakable Stylistic Features.'
                  label='Stylistic'
                  path='/services'
                />
                <CardItem
                  labelHalo={'label__halo'}
                  src={office4}
                  text='45° profile, classic sides with storage units.'
                  label='Classic'
                  path='/products'
                />
                <CardItem
                  labelHalo={'label__halo'}
                  src={office5}
                  text='the contrast between the thicknesses of the desk tops.'
                  label='Contrast'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </>}
    </div>
  );
}

export default Cards;
