import HomeCarousel from "./homeCarousel";

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <ul className="row-ul">
                <li>盆栽新品</li>
                <li>智慧澆水</li>
                <li>無土植栽</li>
                <li>臉書粉專</li>
            </ul>
        </div>
    );
}
export default HomePage;