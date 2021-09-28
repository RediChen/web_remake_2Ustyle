import LogInBtn from "src/00_commonComponents/loginBtn";
import CartBtn from "src/00_commonComponents/cartBtn";
import { FC } from "react";
const SearchBar: FC = () => {
    return (
        <form>
            <input type="text" placeholder="搜尋商品..." />
            <button type="submit"><i /></button>
        </form>
    );
}
const NavTool = () => {
    return (
        <div id="nav-tool">
            <SearchBar />
            <div className="row-ul">
                <LogInBtn />
                <CartBtn />
            </div>
        </div>
    );
}
export default NavTool;