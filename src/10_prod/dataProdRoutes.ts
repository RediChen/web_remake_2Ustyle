import { IDataRouteConfig } from 'src/interface/data-routes';
import Pot from './11_pots/pot';
import Plant from './12_plants/plant';
import Flower from './13_flowerpots/flowerpots';
import GardeningTool from './14_gardeningTools/gardening';
const dataProdRoutes: IDataRouteConfig[] = [
    {
        titleZh: "盆栽",
        titleEn: "potted plants",
        path: "/product-category/combination-potted-plants",
        breadcrumb: "盆栽",
        component: Pot,
    },
    {
        titleZh: "植物",
        titleEn: "plants",
        path: "/product-category/plants",
        breadcrumb: "植物",
        component: Plant,
    },
    {
        titleZh: "花器",
        titleEn: "flowerpots",
        path: "/product-category/flowerpots",
        breadcrumb: "花器",
        component: Flower,
    },
    {
        titleZh: "配件",
        titleEn: "gardening tools",
        path: "/product-category/gardening-tools",
        breadcrumb: "園藝配件",
        component: GardeningTool,
    }
];
export default dataProdRoutes;