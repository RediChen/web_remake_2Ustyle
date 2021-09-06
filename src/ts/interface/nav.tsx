import Logo from "../components/common/logo";
import { FC } from "react";
import dataNav from "../data/dataNav"
import NavTool from "./navTool";
import { Link } from "react-router-dom";
// Part I : Logo --> imported
//* Part II : NavLinks */
const NavLinks: FC = () => {
    const pack = [] as JSX.Element[];
    for (let i in dataNav) {
        pack.push(
            <li>
                <Link
                    to={"/" + dataNav[i]["href"]}
                    className="nav-link"
                    title={dataNav[i]["titleZh"] + " " + dataNav[i]["titleEn"]}
                >
                    {dataNav[i]["titleZh"]}
                </Link>
            </li>
        );
    }
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