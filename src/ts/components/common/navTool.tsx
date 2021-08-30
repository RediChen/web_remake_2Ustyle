import React from "react";
import LogInBtn from "./loginBtn"
import CartBtn from "./cartBtn";

const NavTool = () => {
    const border = {
        borderRight: "1px solid #ccc"
    } as React.CSSProperties;
    return (
        <div id="nav-tool">
            <input type="text" placeholder="搜尋商品..." />
            <LogInBtn style={border} />
            <CartBtn />
        </div>
    );
}
export default NavTool;