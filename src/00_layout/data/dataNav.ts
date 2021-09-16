const dataNav = [
    {
        titleZh: "盆栽",
        titleEn: "potted plants",
        href: "/product-category/combination-potted-plants"
    },
    {
        titleZh: "植物",
        titleEn: "plants",
        href: "/product-category/plants",
    },
    {
        titleZh: "花器",
        titleEn: "flowerpots",
        href: "/product-category/flowerpots",
    },
    {
        titleZh: "配件",
        titleEn: "gardening tools",
        href: "/product-category/gardening-tools",
    }
] as {
    [index: string]: string | undefined;
    titleZh: string;
    titleEn: string;
    href: string;
}[];
export default dataNav;