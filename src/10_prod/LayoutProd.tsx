import {
    matchRoutes,
    renderRoutes,
    RouteConfigComponentProps
} from "react-router-config";
import { Link } from "react-router-dom";
import routeConfig from "src/routeConfig";
type RC = React.ComponentType<RouteConfigComponentProps>;

const LayoutProd: RC = ({ route, location }) => {
    const branch = matchRoutes(routeConfig, location.pathname);
    //matchRoutes 會將此網址所符合（經過）的所有路由，從路由之根開始，
    // 以 array 依序條列至本身那塊。
    // 其中攜帶的資料有二： match & route
    const pack = branch.map(
        (routeSegment, i) => {
            /**
             * 顯示以上的所有的 breadcrumb
             */
            const { path, breadcrumb } = routeSegment.route;
            //從路由設定塊中抽取出 path & breadcrumb
            let tempPath: string;
            if (breadcrumb && typeof path === 'string') {
                tempPath = path;
                return (
                    <li key={i}>
                        <Link to={tempPath}>{breadcrumb}</Link>
                    </li>
                );
            } else {
                console.error('不接受！')
                return null;
            }
        }
    ) as JSX.Element[];
    return (
        <section id="layout-prod">
            <aside>
                <h2>商品導覽</h2>
                <ul id="prod-list-1">
                    <li>盆栽新品</li>
                    <li>盆栽選購指南</li>
                    <li>辦公室系列</li>
                    <li>浴廁系列</li>
                    <li>鹽選推薦．虎尾蘭</li>
                    <li>儲水盆栽．智慧澆水</li>
                    <li>優質培養土</li>
                    <li>植物照顧教學</li>
                </ul>
                <ul id="prod-list-2">
                    <li>安心宅配．滿額優惠</li>
                    <li>特價商品．售完為止</li>
                    <li>亮麗家飾．花魚共賞</li>
                </ul>
            </aside>
            <div>
                <ol>
                    {pack}
                </ol>
                {renderRoutes(route?.routes)}
            </div>
        </section>
    );
};
export default LayoutProd;