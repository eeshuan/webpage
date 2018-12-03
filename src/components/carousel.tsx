import React from "react";
import Slider from "react-slick";
import Image from "gatsby-image";
import CarouselCard from "./CarouselCard";

let Carousel = props => {
    let images = props.data.images;
    var settings = {
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        dots: true
      };
    return (
        <Slider {...settings}>
        {createCarouselCard(images)}
      </Slider>
    )
}

let createCarouselCard = (images) => {
    return (
        images.map((element, index) => {
            return (
                <div key={index}>
                    <CarouselCard data={{node: element.node.childImageSharp}}/>
                </div>
            );
        })
    )
}

export default Carousel;