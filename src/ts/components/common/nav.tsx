import Logo from "./logo";
import { FC } from "react";
import dataNav from "../../data/dataNav"
import NavTool from "./navTool";
// Part I : Logo --> imported
//* Part II : NavLinks */
interface ILinkProps {
    text: string,
    href: string,
    title: string
}
const Link: FC<ILinkProps> = (props) =>
    <a href={props.href} title={props.text} className="nav-link">
        {props.text}
    </a>
const NavLinks: FC = () => {
    const pack = [] as JSX.Element[];
    for (let i in dataNav) {
        const address = "./";//todo

        pack.push(
            <li>
                <Link href={address}
                    text={dataNav[i]["titleZh"]}
                    title={dataNav[i]["titleZh"] + " " + dataNav[i]["titleEn"]} />
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
            <Logo />
            <NavLinks />
            <NavTool />
        </nav>
    );
}
export default Nav;