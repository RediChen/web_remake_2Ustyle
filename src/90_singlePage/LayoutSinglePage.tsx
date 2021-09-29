import { FC, ReactNode } from "react";
import Breadcrumbs from "src/00_commonComponents/breadcrumb/breadcrumb";
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
interface ILayoutSingleProps extends IRCProps {
    titleEn: string;
    titleZh: string;
    children: ReactNode;
}
/**
 * 零散頁面的共用格局
 * @param {titleZh} 中文標題
 * @param {titleEn} 英文標題
 * @param {children} 單個tag
 */
const LayoutSinglePage: FC<ILayoutSingleProps> = (props) =>
    <div className="layout-single-page">
        <header className="center">
            <div>
                <h2>{props.titleEn}</h2>
                <h3>{props.titleZh}</h3>
            </div>
        </header>
        <div>
            <Breadcrumbs location={props.location} />
            {props.children}
        </div>
    </div>
export default LayoutSinglePage;