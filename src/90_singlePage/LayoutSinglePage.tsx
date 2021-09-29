import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
interface ILayoutSingleProps {
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
            <div className="breadcrumb">
                <Link to="/">首頁</Link>
                <span>&gt; 導覽尚未建立</span>
            </div>
            {props.children}
        </div>
    </div>
export default LayoutSinglePage;