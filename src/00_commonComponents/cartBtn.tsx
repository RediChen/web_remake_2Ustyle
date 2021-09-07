import { FC } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./images/cartBtn/cart32px.png";

const CartBtn: FC = () => {
    const totCose = 0;//todo 和後端串接
    return (
        <div className="cart-btn">
            <Link to="/cart" title="前往購物車">
                <img src={cartIcon} alt="購物車" />
                <span>NT${totCose}</span>
            </Link>
        </div>
    );
}
export default CartBtn;