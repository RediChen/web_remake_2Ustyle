import { FC } from "react";
import cartIcon from "../../../assets/cart/cart32px.png";

const CartBtn:FC = () => {
    const totCose = 0;
    const style = {
        display: "flex",
        alignItems: "center",
        color: "#fe791c",
    } as React.CSSProperties;
    return (
        <a href="" title="前往購物車" style={style}>
            <img src={cartIcon} alt="購物車" />
            <span>NT${totCose}</span>
        </a>
    );
}
export default CartBtn;