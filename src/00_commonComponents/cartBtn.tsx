import { FC } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./images/cartBtn/cart32px.png";

const CartBtn:FC = () => {
    const totCose = 0;
    const style = {
        display: "flex",
        alignItems: "center",
        color: "#fe791c",
    } as React.CSSProperties;
    return (
        <Link to="/cart" title="前往購物車" style={style}>
            <img src={cartIcon} alt="購物車" />
            <span>NT${totCose}</span>
        </Link>
    );
}
export default CartBtn;