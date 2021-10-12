import ContactBox from "src/00_commonComponents/contactBox/contactBox";
import HomeCarousel from "./homeCarousel";

const HomePage = () => {
    return (
        <section id="home-page">
            <HomeCarousel />
            <ul className="row-ul" id="home-nav">
                <li className="center">
                    <i /><span>盆栽新品</span>
                </li>
                <li className="center">
                    <i /><span>智慧澆水</span>
                </li>
                <li className="center">
                    <i /><span>無土植栽</span>
                </li>
                <li className="center">
                    <i /><span>臉書粉專</span>
                </li>
            </ul>
            <ContactBox />
        </section>
    );
}
export default HomePage;