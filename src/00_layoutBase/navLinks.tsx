import { FC } from "react";
import dataNav from "./data/dataNav";
import { NavLink } from "react-router-dom";
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
export default NavLinks;