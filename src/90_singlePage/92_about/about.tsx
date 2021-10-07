import ContactBox from "src/00_commonComponents/contactBox";
import LayoutSinglePage from "../LayoutSinglePage"
import ListArrow from "src/00_commonComponents/listArrow/listArrow";
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import { FC } from "react";
import logoConcept1 from './images/logoConcept1.jpg';
import logoConcept2 from './images/logoConcept2.jpg';
import logoConcept3 from './images/logoConcept3.jpg';
import logoBlock from './images/logoBlock.jpg';

const About: FC<IRCProps> = (props) =>
    <LayoutSinglePage
        titleEn="About Us"
        titleZh="關於 2Ustyle"
        {...props}
    >
        <h2>2Ustyle</h2>
        <p>
            2014年春天，在懵懵懂懂的成長過程中，我們創立了台灣第一家網路原生的盆栽品牌。
            <br />我們希望從前身&nbsp;ecofun2U（把eco &amp; fun帶給你/妳）
            <br />昇華成為一種&nbsp;<b>2U的生活態度，你我的&nbsp;Lifestyle。</b>
        </p>
        <p>
            取名&nbsp;2U，原意是&nbsp;TO YOU，想要把一種「生活態度」帶給你/妳的用意，
            <br />2Ustyle&nbsp;的&nbsp;Logo，是一張充滿希望的笑臉。
        </p>
        <div id="logo-gallery">
            <img src={logoConcept1} alt="笑臉" title="笑臉" />
            <img src={logoConcept2} alt="笑臉2U" title="笑臉2U" />
            <img src={logoConcept3} alt="2Ustyle logo" title="2Ustyle logo" />
        </div>
        <br />
        <h2>使命</h2>
        <p>我們致力於「有生命的」居家裝飾，希望與您攜手打造屬於自己的幸福空間。
            <br />我們相信，真正的樂活源自生活中的每個小細節。</p>
        <p className="highlight">我們堅持，從微笑出發是專屬您的生活「風格」，忙碌之餘更要「圖」個「悠」閒。</p>
        <p>我們建立了友善的盆栽線上購物平台，讓消費者在工作、居家兩頭忙碌之餘，能夠輕鬆地選購舒壓小品、療鬱盆栽及各式空氣淨化植物，也讓消費者在購買花卉園藝相關商品的同時，能享有品牌的貼心服務。</p>
        <ul>
            <li><ListArrow />針對新手，首創套餐式的<b>「盆栽簡單購」</b>，幫助消費者排除難以在網路上選購盆栽的障礙。</li>
            <li><ListArrow />針對常客，進一步推出創新的線上<b>「花器自由配」</b>，讓消費者可以隨心所欲的幫植物穿搭。</li>
        </ul>
        <p>我們還整合了植物安心宅配技術、快速到貨的物流服務，以及專業客服提供盆栽照顧的售後服務。</p>
        <br />
        <h2>公司資訊</h2>
        <div id="info-sheet">
            <img src={logoBlock} alt="2Ustyle" />
            <ul>
                <li>公司名稱：塔瑪國際有限公司</li>
                <li>客服電話：02-2791-2816</li>
                <li>客服信箱：service@2ustyle.com</li>
                <li>營業時間：週一至週五 10:00~13:00、14:00~17:00</li>
                <li>通訊地址：台北市內湖區康寧路一段267號一樓</li>
            </ul>
        </div>
        {/*todo 尚未修飾*/}
        <ContactBox text="聯絡我們" />
    </LayoutSinglePage>
export default About;