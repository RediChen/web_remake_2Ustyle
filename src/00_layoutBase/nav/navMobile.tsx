import { FC } from "react";
const NavMobile: FC = () => {
    return (
        <ul id="nav-mobile">
            <li>
                <button>
                    <i /><span>協助訂購</span>
                </button>
            </li>
            <li>
                <button>
                    <i /><span>會員中心</span>
                </button>
            </li>
            <li>
                <button>
                    <i /><span>搜尋</span>
                </button>
            </li>
            <li>
                <button>
                    <i /><span>Cart 結帳</span>
                </button>
            </li>
        </ul>
    );
};
export default NavMobile;