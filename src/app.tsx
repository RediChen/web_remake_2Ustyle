import { FC } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import HomePage from './ts/components/homePage/HomePage';
import Layout from './ts/interface/Layout';
import Pot from './ts/components/pot/pot';
import dataNav from './ts/data/dataNav';
import Login from './ts/components/login/login';
import CartPage from './ts/components/cart/cart';
import Plant from './ts/components/plant/plant';
import Flower from './ts/components/flowerpots/flowerpots';
import GardeningTool from './ts/components/gardeningTool/gardening';
//* 路由 map */
const mapOfRoutes = [
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
        path: '/' + dataNav[0]["href"],
        component: Pot
    },
    {
        path: '/' + dataNav[1]["href"],
        component: Plant
    },
    {
        path: '/' + dataNav[2]["href"],
        component: Flower
    },
    {
        path: '/' + dataNav[3]["href"],
        component: GardeningTool
    },
] as {
    path: string,
    component: FC,
    exact: boolean
}[];
const renderRoutes = mapOfRoutes.map(
    (route) =>
        <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
        >
            <route.component />
        </Route>
)
//* BigPicture
const App = () =>
    <Router>
        <Layout>
            {renderRoutes}
        </Layout>
    </Router>
export default App;