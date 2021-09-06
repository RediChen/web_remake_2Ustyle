import Logo from "src/00_commonComponents/logo";
import { FC } from "react";
import dataNav from "./data/dataNav";
import NavTool from "./navTool";
import { Link } from "react-router-dom";
// Part I : Logo --> imported
//* Part II : NavLinks */
const NavLinks: FC = () => {
    // const pack = [] as JSX.Element[];
    //todo 以下尚未測試
    const pack = dataNav.map(item =>
        <Link to={item["href"]} className="nav-link"
            title={item["titleZh"] + " " + item["titleEn"]}>
            {item["titleZh"]}
        </Link>
    );
    // for (let i in dataNav) {
    //     pack.push(
    //         <li>
    //             <Link
    //                 to={"/" + dataNav[i]["href"]}
    //                 className="nav-link"
    //                 title={dataNav[i]["titleZh"] + " " + dataNav[i]["titleEn"]}
    //             >
    //                 {dataNav[i]["titleZh"]}
    //             </Link>
    //         </li>
    //     );
    // }
    return (
        <ul id="nav-link-wrap">{pack}</ul>
    );
}
// Part III : NavTool --> imported
//* 最後組裝 */
const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <Logo />
            </Link>
            <NavLinks />
            <NavTool />
        </nav>
    );
}
export default Nav;