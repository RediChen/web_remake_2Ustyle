import React, { FC } from "react";
interface BtnProps {
    style? : React.CSSProperties
}
const LogInBtn: FC<BtnProps> = ({style = {}}) => {
    return (
        <a className="login-btn"
        href=""
        style={style}>
            會員登入
        </a>
    );
}
export default LogInBtn;