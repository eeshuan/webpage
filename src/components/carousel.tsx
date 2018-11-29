import React from "react";
import Slider from "react-slick";
import Image from "gatsby-image";

let Carousel = props => {
    let images = props.data.images;
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      };
    return (
        <Slider {...settings}>
        {images.map((element, index) => {
            return createCarouselCard(element.node.childImageSharp, index);
        })}
      </Slider>
    )
}

let createCarouselCard = (node, index) => {
    return (
        <div id={index}>
            <Image fixed={node.fixed}/>
        </div>
    )
}

export default Carousel;