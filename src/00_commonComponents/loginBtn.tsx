import React, { FC } from "react";
import { Link } from "react-router-dom";
interface BtnProps {
    style? : React.CSSProperties
}
const LogInBtn: FC<BtnProps> = ({style = {}}) => {
    return (
        <Link className="login-btn" to="/login" style={style}>
            會員登入
        </Link>
    );
}
export default LogInBtn;