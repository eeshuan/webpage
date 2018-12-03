import React from "react";
import Image from "gatsby-image";
import style from "./carouselCard.module.scss";

let CarouselCard = props => {
    let data = props.data;
    let imageData = data.node.fixed;
    return (
        <div className={style.card}>
            <div className={style.tag}>
                Hello
            </div>
            <Image fixed={imageData}/>
        </div>
    )
}

export default CarouselCard;