import { FC } from "react";
import dataProdRoutes from "../../10_prod/dataProdRoutes";
import { NavLink } from "react-router-dom";
//* Part II : NavLinks */
const NavLinks: FC = () => {
    const pack = dataProdRoutes.map(item =>
        (item["path"]) ?
            <li className="center" id={item["titleEn"]} key={item["titleEn"]}>
                <NavLink
                    to={item["path"]}
                    key={item["titleEn"]}
                    className="nav-link"
                    activeClassName="nav-link-active"
                    title={item["titleZh"] + " " + item["titleEn"]}
                >
                    {item["titleZh"]}
                </NavLink>
            </li>
            : null
    );
    return (
        <ul id="nav-link-wrap" className="row-ul">{pack}</ul>
    );
}
export default NavLinks;