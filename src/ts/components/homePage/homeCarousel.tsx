import React from "react";
import img01 from "../../../assets/homeCarousel/carousel01.jpg";
const HomeCarousel = () => {
    //todo 待 Carousel 元件製作完畢，再套用至此
    const shadow = {
        boxShadow: "0 15px 10px -5px #999"
    } as React.CSSProperties;
    return (
        <img src={img01} alt="上網買盆栽，安心宅配" style={shadow} />
    );
}
export default HomeCarousel;