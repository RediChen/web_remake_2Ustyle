import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { IDataRouteConfig } from './interface/data-routes';
import HomePage from './01_homePage/HomePage';
import dataAccountRoutes from './02_account/dataAccountRoutes'
import MyAccount from './02_account/myAccount';
import CartPage from './03_cart/cart';
import LayoutProd from './10_prod/LayoutProd';
import dataProdRoutes from './10_prod/dataProdRoutes'
import ShoppingGuide from './90_singlePage/91_shoppingGuide/shoppingGuide';
import About from './90_singlePage/92_about/about';
import Disclaimer from './90_singlePage/95_disclaimer/disclaimer';
import Terms from './90_singlePage/93_terms/terms';

/**
 * 為了優化此檔的版面，將各區域的子路由獨立成 data 檔，
 * 再使用此函數展開成 config 所需的陣列。
 * @param subConfig 獨立撰寫的路由 data
 * @returns 可以直接放進 routes 中的陣列
 */
const getSubRoutes = (subConfig: IDataRouteConfig[]) => {
    const pack = [] as RouteConfig[];
    for (let item of subConfig) {
        pack.push(
            {
                path: item["path"],
                component: item["component"],
                breadcrumb: item["breadcrumb"],
                exact: item["exact"],
            }
        );
    }
    return pack;
}
/**
 * 本網站的路由總組態檔
 */
const routeConfig: RouteConfig[] = [
    {
        path: '/',
        component: HomePage,
        breadcrumb: '首頁',
        exact: true
    },
    {
        path: '/my-account',
        component: MyAccount,
        routes: getSubRoutes(dataAccountRoutes),
    },
    {
        path: '/cart',
        component: CartPage,
        breadcrumb: '購物車'
    },
    {
        path: '/product-category',
        component: LayoutProd,
        routes: getSubRoutes(dataProdRoutes),
    },
    {
        path: '/shopping-guide',
        component: ShoppingGuide,
        breadcrumb: '購物說明'
    },
    {
        path: '/about',
        component: About,
        breadcrumb: '關於 2Ustyle'
    },
    {
        path: '/disclaimer',
        component: Disclaimer,
        breadcrumb: '免責聲明'
    },
    {
        path: '/terms',
        component: Terms,
        breadcrumb: '網站使用條款'
    },
    {
        path: '*',
        component: () => <Redirect to="/" />,
    },
];
export default routeConfig;