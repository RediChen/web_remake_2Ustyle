const dataNav = [
    {
        titleZh: "盆栽",
        titleEn: "potted plants",
        href: "combination-potted-plants"
    },
    {
        titleZh: "植物",
        titleEn: "plants",
    },
    {
        titleZh: "花器",
        titleEn: "flowerpots",
    },
    {
        titleZh: "配件",
        titleEn: "gardening tools",
        href: "gardening-tools",
    }
] as {
    [index: string]: string | undefined;
    titleZh: string;
    titleEn: string;
    href?: string;
}[];
export default dataNav;