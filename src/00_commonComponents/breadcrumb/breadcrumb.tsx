import routeConfig from "src/routeConfig";
import { Link } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { FC } from "react";
import { Location } from 'history';
interface IBreadcrumbsProps {
    location: Location;
}

/**
 * 顯示此路由以上的所有的 breadcrumb，並附樣式
 */
const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => {
    const branch = matchRoutes(routeConfig, props.location.pathname);
    //matchRoutes 會將此網址所符合（經過）的所有路由，從路由之根開始，
    // 以 array 依序條列至本身那塊。
    // 其中攜帶的資料有二： match & route
    const pack = branch.map(
        (routeSegment, i) => {
            const { path, breadcrumb } = routeSegment.route;
            //從路由設定塊中抽取出 path & breadcrumb
            const notActive = (path === props.location.pathname);

            if (breadcrumb && typeof path === 'string') {
                let tempPath = path;
                return (
                    notActive ?
                        <li key={i}><span>&gt;</span>{breadcrumb}</li>
                        : <li key={i}>
                            <Link to={tempPath}>&gt;{breadcrumb}</Link>
                        </li>
                );
            } else {
                console.error('不接受！')
                return null;
            }
        }
    ) as JSX.Element[];
    return (
        <ul className="breadcrumb">
            <li><Link to="/">首頁</Link></li>
            {pack}
        </ul>
    );
};
export default Breadcrumbs;