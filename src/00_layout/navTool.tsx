import {CSSProperties} from "react";
import LogInBtn from "src/00_commonComponents/loginBtn";
import CartBtn from "src/00_commonComponents/cartBtn";

const NavTool = () => {
    const border = {
        borderRight: "1px solid #ccc"
    } as CSSProperties;
    return (
        <div id="nav-tool">
            <input type="text" placeholder="搜尋商品..." />
            <LogInBtn style={border} />
            <CartBtn />
        </div>
    );
}
export default NavTool;