import { FC } from "react";
import { Link } from "react-router-dom";
const NavMobile: FC = () => {
    function handleCall() {
        alert("測試版不提供電話功能。")
    }
    function handleSearch() {
        alert("功能尚未建立完成...")
    }
    return (
        <ul id="nav-mobile">
            <li>
                <button onClick={handleCall}>
                    <i /><span>協助訂購</span>
                </button>
            </li>
            <li>
                <Link to='/my-account/'>
                    <i /><span>會員中心</span>
                </Link>
            </li>
            <li>
                <button onClick={handleSearch}>
                    <i /><span>搜尋</span>
                </button>
            </li>
            <li>
                <Link to='/cart'>
                    <i /><span>Cart 結帳</span>
                </Link>
            </li>
        </ul>
    );
};
export default NavMobile;