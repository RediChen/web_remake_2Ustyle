import routeConfig from "src/routeConfig";
import { Link } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { FC } from "react";
import { Location } from 'history';
/**
 * 生成此頁面的 breadcrumbs，並附樣式。
 * 若有子路由架構，置於其共用的岔道或頁面本檔皆可。
 * @param location
 * @example <Breadcrumbs location={location} />
 * @returns &lt;ul&gt;
 */
const Breadcrumbs: FC<{location: Location}> = (props) => {
    /**
     * matchRoutes 會將此網址所符合（經過）的所有路由，
     * 從路由之根開始，以 array 依序條列至本身那塊。
     * @returns match & route
     */
    const branch = matchRoutes(routeConfig, props.location.pathname);
    /**
     * 將含有 breadcrumb 的路由之塊轉譯成 HTML。
     * - 本頁標籤：有樣式，無連結
     * - 其他標籤：無樣式，有連結
     * @return JSX.Element[]，不符合者會成為陣列中的空格 null
     */
    const pack = branch.map(
        (routeSegment, i) => {
            const { path, breadcrumb } = routeSegment.route;
            const notActive = (path === props.location.pathname);

            if (breadcrumb && typeof path === 'string') {
                let tempPath = path;
                return (
                    notActive ?
                        <li key={i}><span>&gt;</span>{breadcrumb}</li>
                        :
                        <li key={i}>
                            <Link to={tempPath}>&gt;{breadcrumb}</Link>
                        </li>
                );
            } else {
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