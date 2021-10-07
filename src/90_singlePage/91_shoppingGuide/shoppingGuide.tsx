import LayoutSinglePage from "../LayoutSinglePage"
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import { FC } from "react";
const ShoppingGuide: FC<IRCProps> = (props) =>
    <LayoutSinglePage
        titleEn="Shopping Guide"
        titleZh="購物說明"
        {...props}
    >
        {/*  */}
    </LayoutSinglePage>
export default ShoppingGuide;