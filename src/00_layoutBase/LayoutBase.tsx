import { FC } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import Logo from "src/00_commonComponents/logo/logo";
import rwdFor from "src/00_commonComponents/rwdFor";
import Footer from "./footer";
import InfoBox from "./infoBox";
import NavTool from "./nav/navTool";
import NavLinks from "./nav/navLinks";
import NavMobile from "./nav/navMobile";

/**
 * 全站共用的介面布局
 * 包含：導覽列、頁尾、推播氣球
 * @param children 頁面內容
 */
const LayoutBase: FC = ({ children }) => {
    const isDesktop = useMediaQuery(rwdFor('lg'));
    if (isDesktop) {
        return (
            <>
                <nav>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <NavLinks />
                    <NavTool />
                </nav>
                {children}
                <Footer />
                <InfoBox />
            </>
        );
    } else {
        return (
            <>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                {children}
                <Footer />
                <InfoBox />
                <NavMobile />
            </>
        );
    }
}
export default LayoutBase;