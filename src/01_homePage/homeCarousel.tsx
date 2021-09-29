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
/**
 * 生成輪播圖的頁面，用 mui 的 paper 元件裝輪播圖的圖片
 * @param props
 * - 
 * - imgSrc: string
 * - imgAlt: string
 * @returns Paper's
 */
const Item: FC<IProps> = (props) =>
    <Paper elevation={6}>
        <img src={props.imgSrc} alt={props.imgAlt} />
    </Paper>

const HomeCarousel = () => {
    const pack = dataCarousel.map(
        (item, i) =>
            <Item key={i} imgSrc={item.imgSrc} imgAlt={item.imgAlt} />
    );
    return <Carousel>{pack}</Carousel>
}
export default HomeCarousel;