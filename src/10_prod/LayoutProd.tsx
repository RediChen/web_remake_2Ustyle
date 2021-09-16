import {
    renderRoutes,
    RouteConfigComponentProps
} from "react-router-config";

const LayoutProd: React.ComponentType<RouteConfigComponentProps> = ({ route }) => {
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
            {renderRoutes(route?.routes)}
        </section>
    );
};
export default LayoutProd;