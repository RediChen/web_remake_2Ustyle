import { FC } from "react";
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import LayoutSinglePage from "../LayoutSinglePage";
const PrivacyPage:FC<IRCProps> = (props) =>
    <LayoutSinglePage titleZh="隱私權政策" titleEn="Policy" {...props}>
        <h2>本隱私權政策適用之範圍</h2>
    </LayoutSinglePage>
export default PrivacyPage;