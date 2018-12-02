import React from "react";
import Image from "gatsby-image";

let CarouselCard = props => {
    let data = props.data;
    let imageData = data.node.fixed;
    return (
        <div>
            {/* <div>Hello</div> */}
            <Image fixed={imageData}/>
        </div>
    )
}

export default CarouselCard;