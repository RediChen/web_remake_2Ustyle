import Logo from "src/00_commonComponents/logo/logo";
import { FC } from "react";
import dataNav from "./data/dataNav";
import NavTool from "./navTool";
import { Link, NavLink } from "react-router-dom";
import rwdFor from "src/00_commonComponents/rwdFor";
import { useMediaQuery } from "@material-ui/core";
import NavMobile from "./navMobile";
// Part I : Logo --> imported
//* Part II : NavLinks */
const NavLinks: FC = () => {
    const pack = dataNav.map(item =>
        <li className="center" id={item["titleEn"]} key={item["titleEn"]}>
            <NavLink
                to={item["href"]}
                key={item["titleEn"]}
                className="nav-link"
                activeClassName="nav-link-active"
                title={item["titleZh"] + " " + item["titleEn"]}
            >
                {item["titleZh"]}
            </NavLink>
        </li>
    );
    return (
        <ul id="nav-link-wrap" className="row-ul">{pack}</ul>
    );
}
// Part III : NavTool --> imported
//* 最後組裝 */
const Nav: FC = () => {
    const isDesktop = useMediaQuery(rwdFor('lg'));
    if (isDesktop) {
        return (
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <NavLinks />
                <NavTool />
            </nav>
        );
    } else {
        return (
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <NavMobile />
            </nav>
        );
    }
}
export default Nav;