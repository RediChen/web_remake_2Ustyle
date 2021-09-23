import { FC } from "react";
import img01 from "./images/carousel01.jpg";
import img02 from "./images/carousel02.jpg";
import img03 from "./images/carousel03.jpg";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const dataCarousel = [
    {
        imgSrc: img01,
        imgAlt: "上網買盆栽，安心宅配"
    },
    {
        imgSrc: img02,
        imgAlt: "推薦室內盆栽"
    },
    {
        imgSrc: img03,
        imgAlt: "智慧澆水盆栽"
    }
];
interface IProps {
    imgSrc: string;
    imgAlt: string;
};
const Item: FC<IProps> = (props) =>
    /**
     * param imgSrc: string
     * param imgAlt: string
     */
    <Paper elevation={6}>
        <img src={props.imgSrc} alt={props.imgAlt} />
    </Paper>

const HomeCarousel = () =>
    <Carousel>
        {dataCarousel.map((item, i) =>
            <Item key={i} imgSrc={item.imgSrc} imgAlt={item.imgAlt} />
        )}
    </Carousel>
export default HomeCarousel;