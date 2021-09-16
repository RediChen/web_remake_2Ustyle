import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import dataNav from './00_layout/data/dataNav';
import HomePage from './01_homePage/HomePage';
import Login from './02_login/login';
import CartPage from './03_cart/cart';
import Disclaimer from './04_disclaimer/disclaimer';
import Pot from './10_prod/11_pots/pot';
import LayoutProd from './10_prod/LayoutProd';
import Plant from './10_prod/12_plants/plant';
import Flower from './10_prod/13_flowerpots/flowerpots';
import GardeningTool from './10_prod/14_gardeningTools/gardening';

//* 路由 map */
const routeConfig: RouteConfig[] = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: '/product-category',
        component: LayoutProd,
        routes: [
            {
                path: dataNav[0]["href"],
                component: Pot
            },
            {
                path: dataNav[1]["href"],
                component: Plant
            },
            {
                path: dataNav[2]["href"],
                component: Flower
            },
            {
                path: dataNav[3]["href"],
                component: GardeningTool
            }
        ]
    },
    {
        path: '/disclaimer',
        component: Disclaimer
    },
    {
        path: "*",
        component: () => <Redirect to="/" />
    }
];
export default routeConfig;