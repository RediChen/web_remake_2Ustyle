import { CSSProperties, FC } from "react";

const ListArrow:FC = () => {
    const style:CSSProperties = {
        padding: "3px",
        marginRight: "1rem",
        display: "inline-block",
        borderStyle: "solid",
        borderColor: "#9ac448",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(-45deg) translateY(-1px)"
    };
    return (<i style={style}></i>);
}
export default ListArrow;