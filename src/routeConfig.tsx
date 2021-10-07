import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import dataNav from './00_layoutBase/data/dataNav';
import HomePage from './01_homePage/HomePage';
import Login from './02_account/020_login/login';
import CartPage from './03_cart/cart';
import Pot from './10_prod/11_pots/pot';
import LayoutProd from './10_prod/LayoutProd';
import Plant from './10_prod/12_plants/plant';
import Flower from './10_prod/13_flowerpots/flowerpots';
import GardeningTool from './10_prod/14_gardeningTools/gardening';
import ShoppingGuide from './90_singlePage/91_shoppingGuide/shoppingGuide';
import About from './90_singlePage/92_about/about';
import Disclaimer from './90_singlePage/95_disclaimer/disclaimer';
import Terms from './90_singlePage/93_terms/terms';

const routeConfig: RouteConfig[] = [
    {
        path: '/',
        component: HomePage,
        breadcrumb: '首頁',
        exact: true
    },
    {
        path: '/login',
        component: Login,
        breadcrumb: '登入'
    },
    {
        path: '/cart',
        component: CartPage,
        breadcrumb: '購物車'
    },
    {
        path: '/product-category',
        component: LayoutProd,
        routes: [
            {
                path: dataNav[0]["href"],
                component: Pot,
                breadcrumb: '盆栽'
            },
            {
                path: dataNav[1]["href"],
                component: Plant,
                breadcrumb: '植物'
            },
            {
                path: dataNav[2]["href"],
                component: Flower,
                breadcrumb: '花器'
            },
            {
                path: dataNav[3]["href"],
                component: GardeningTool,
                breadcrumb: '配件'
            }
        ]
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
        path: "*",
        component: () => <Redirect to="/" />
    }
];
export default routeConfig;