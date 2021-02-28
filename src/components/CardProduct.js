import { Container, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import React from 'react';
// import Carousel from 'react-multi-carousel';
import PictureCarousel from './PictureCarousel';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Cards.css';

function CardItem({tile}) {
    return (
        <>
            <li className={`cards__product`}>
                <div className="cards__product__div">
                    <figure className='cards__item__pic-wrap__product'>
                                <img
                                    className='cards__item__img'
                                    alt='Travel Image'
                                    src={tile.src}
                                />
                    </figure>
                    <div className={`cards__item__info__product`}>
                        <h5 className='cards__item__text__product'><span className="cards__item__title">{tile.title.toUpperCase()}</span></h5>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CardItem;
