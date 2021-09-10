import HomeCarousel from "./homeCarousel";

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <ul className="row-ul" id="home-nav">
                <li className="center">
                    <img src="" alt="(圖)" />
                    盆栽新品
                </li>
                <li className="center">
                    <img src="" alt="(圖)" />
                    智慧澆水
                </li>
                <li className="center">
                    <img src="" alt="(圖)" />
                    無土植栽
                </li>
                <li className="center">
                    <img src="" alt="(圖)" />
                    臉書粉專
                </li>
            </ul>
            <div id="home-contact-box">
                <h1>需要協助訂購嗎？</h1>
                <div>
                    <div className="home-contact-card">
                        <img src="" alt="(信)" />
                        <div>
                            <h2>寫email給我們</h2>
                            <a href="mailto:service@2ustyle.com">service@2ustyle.com</a>
                        </div>
                    </div>
                    <div className="home-contact-card">
                        <img src="" alt="(筒)" />
                        <div>
                            <h2>撥電話給我們</h2>
                            <a href="tel:02-2791-2816">02-2791-2816</a>
                        </div>
                    </div>
                    <div className="home-contact-card">
                        <img src="" alt="(鐘)" />
                        <div>
                            <h2>電話服務時間</h2>
                            <span>10:00~13:00、14:00~17:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;