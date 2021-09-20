import HomeCarousel from "./homeCarousel";
import iconMail from "./images/iconMail.png";
import iconPhone from "./images/iconPhone.png";
import iconClock from "./images/iconClock.png";

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
            <div id="home-contact-box">
                <h1>需要協助訂購嗎？</h1>
                <div>
                    <div className="home-contact-card">
                        <img src={iconMail} alt="(信封)" />
                        <div>
                            <h2>寫email給我們</h2>
                            <a href="mailto:service@2ustyle.com">service@2ustyle.com</a>
                        </div>
                    </div>
                    <div className="home-contact-card">
                        <img src={iconPhone} alt="(話筒)" />
                        <div>
                            <h2>撥電話給我們</h2>
                            <a href="tel:02-2791-2816">02-2791-2816</a>
                        </div>
                    </div>
                    <div className="home-contact-card">
                        <img src={iconClock} alt="(時鐘)" />
                        <div>
                            <h2>電話服務時間</h2>
                            <span>10:00~13:00、14:00~17:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomePage;