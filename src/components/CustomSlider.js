import React, { Component } from 'react';
import './CustomSlider.css';
import { Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CustomSlider({ }) {
    const settings = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        initialSlide: true
    };
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="slider">
            {/* <Carousel prevArrow={<KeyboardArrowLeftIcon />} nextArrow={<KeyboardArrowRightIcon />}> */}
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container carousel-slider"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                // customRightArrow={<CustomRightArrow />}
                // customLeftArrow={<CustomLeftArrow />}
            >
                <div className="sliderElement">
                    <Typography variant={'h2'}>Click and collect très efficace et personnel accueillant. J'ai pu récupérer ma commande très rapidement.</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>J'ai été au click and collect de Rouen la semaine dernière : ultra satisfaite, horaire respecté et commande prête !</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Click and collect réalisé ce jour à Ikea Lyon Grand Parilly. Très bon accueil, organisation parfaite et retrait effectué sans aucune attente.</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Livraison au top, arrivée le jour prévu. Les livreurs ont été très professionnels et respectueux.</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Hej 👋 Suivi de commande impeccable, livraison vente à distance à domicile le jour prévu, livreurs courtois et professionnels.</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Franchement, le rapport qualité prix est top, c'est un gros plus d'en avoir un près de chez soi.</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}> Merci pour tout car vous parvenez à être agréable et serviable malgré le contexte difficile ! Bravo et courage !</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Le service click and collecte facilite la vie pendant les confinements</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>J'adore ! Je suis fan de leurs produits, presque une accro, mais pas autant que leur fabuleuse tarte au daim. :) ♥</Typography>
                </div>
                <div className="sliderElement">
                    <Typography variant={'h2'}>Commande complète ! Heure de livraison respectée ! Livreurs polis ! Rien a dire !</Typography>
                </div>
            </Carousel>
        </div>
    );
}

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (<div style={{
        position: "absolute",
        left: '98%',
        height: '300px',
    }}>
        <KeyboardArrowRightIcon style={{
            backgroundColor: "white",
            height: '100%',
        }} onClick={() => onClick()} />
    </div>
    );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <div style={{
            textAlign: "center",
            position: "absolute"
        }}>
            <KeyboardArrowLeftIcon onClick={() => onClick()} />
        </div>);
};