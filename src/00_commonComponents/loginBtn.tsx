import { FC } from "react";
import { Link } from "react-router-dom";
const LogInBtn: FC = () => {
    return (
        <div className="login-btn center">
            <Link to="/my-account/">
                會員登入
            </Link>
        </div>
    );
}
export default LogInBtn;