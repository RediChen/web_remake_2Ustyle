import { Redirect } from "react-router";
import { IDataRouteConfig } from "src/interface/data-routes";
import Login from "./020_login/login";
import LostPassword from "./021_lostPassword/lostPassword";

const dataAccountRoutes: IDataRouteConfig[] = [
    {
        path: "/my-account/",
        exact: true,
        breadcrumb: "會員登入",
        component: Login,
    },
    {
        path: "/my-account/lost-password",
        exact: true,
        breadcrumb: "重設密碼",
        component: LostPassword,
    },
    {
        path: '*',
        component: () => <Redirect to="/my-account/" />,
    },
];
export default dataAccountRoutes;