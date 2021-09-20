import { FC } from "react";
import Nav from "./nav";
import Footer from "./footer";
import InfoBox from "./infoBox";

/// 全站共用的介面布局
    const LayoutBase: FC = ({children}) =>
    <>
        <Nav />
        {children}
        <Footer />
        <InfoBox />
    </>
export default LayoutBase;