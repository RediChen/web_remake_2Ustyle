import { Link } from "react-router-dom";

const Footer = () =>
    <footer>
        <div id="footer-info-box">
            <ul className="row-ul">
                <li>
                    <Link to="/shopping-guide">購物說明</Link>
                </li>
                <ul className="row-ul">
                    <li>
                        <Link to="/about">關於&nbsp;2Ustyle</Link>
                    </li>
                    <li><a href="tel:02-2791-2816">02-2791-2816</a></li>
                </ul>
            </ul>
            <ul className="row-ul">
                <li>網站使用條款</li>
                <li>隱私權政策</li>
                <li><Link to="/disclaimer">免責聲明</Link></li>
            </ul>
            <ul className="row-ul">
                <li>網站維護</li>
                <li>
                    <a href="https://www.2ustyle.com" target="_blank"
                        title="2Ustyle官方網站" rel="noreferrer">
                        &copy; 2020 2Ustyle
                    </a>
                </li>
            </ul>
        </div>
        <h3 id="footer-copyright">
            此網站僅為復刻練習，版權仍屬
            <a href="https://www.2ustyle.com" target="_blank"
                title="2Ustyle官方網站" rel="noreferrer">
                官方
            </a>
            所有。
        </h3>
    </footer>
export default Footer;