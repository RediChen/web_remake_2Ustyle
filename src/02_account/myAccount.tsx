import { FC } from "react";
import {
    renderRoutes,
    RouteConfigComponentProps as IRCProps
} from "react-router-config";
import Breadcrumbs from "src/00_commonComponents/breadcrumb/breadcrumb";

const MyAccount: FC<IRCProps> = ({ route, location }) => {
    return (
        <section className="my-account">
            <Breadcrumbs location={location} />
            {renderRoutes(route?.routes)}
        </section>
    );
};
export default MyAccount;