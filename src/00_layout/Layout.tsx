import { FC } from "react";
import Footer from "./footer";
import Nav from "./nav";

/// 全站共用的介面布局
const Layout: FC = ({children}) =>
<>
    <Nav />
    {children}
    <Footer />
</>
export default Layout;