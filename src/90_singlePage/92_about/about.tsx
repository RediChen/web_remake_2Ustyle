import ContactBox from "src/00_commonComponents/contactBox";
import LayoutSinglePage from "../LayoutSinglePage"
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import { FC } from "react";

const About: FC<IRCProps> = (props) =>
    <LayoutSinglePage
    titleEn="About Us"
    titleZh="關於 2Ustyle"
    {...props}
    >
        <article>
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
            <h2>使命</h2>
            <p>我們建立了友善的盆栽線上購物平台，讓消費者在工作、居家兩頭忙碌之餘，能夠輕鬆地選購舒壓小品、療鬱盆栽及各式空氣淨化植物，也讓消費者在購買花卉園藝相關商品的同時，能享有品牌的貼心服務。</p>
            <ul>
                <li><i className="arrow right"></i>針對新手，首創套餐式的<b>「盆栽簡單購」</b>，幫助消費者排除難以在網路上選購盆栽的障礙。</li>
                <li><i className="arrow right"></i>針對常客，進一步推出創新的線上<b>「花器自由配」</b>，讓消費者可以隨心所欲的幫植物穿搭。</li>
            </ul>
            <p>我們還整合了植物安心宅配技術、快速到貨的物流服務，以及專業客服提供盆栽照顧的售後服務。</p>
            <h2>公司資訊</h2>
            <p>還沒建檔</p>
            <ContactBox text="聯絡我們" />
        </article>
    </LayoutSinglePage>
export default About;