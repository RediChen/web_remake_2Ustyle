import { FC } from "react";
import { Link } from "react-router-dom";

const Login: FC = () => {
    return (
        <div className="login-page">
            <div className="login">
                <h2>登入頁面</h2>
                <form action="" className="user-login">
                    <p>
                        <label htmlFor="user-email" className="form-row">
                            電子信箱
                            <span className="required">*</span>
                        </label>
                        <input type="text" id="user-email" />
                    </p>
                    <p>
                        <label htmlFor="password" className="form-row">
                            密碼
                            <span className="required">*</span>
                        </label>
                        <input type="password" id="password" />
                    </p>
                    <p>
                        <label htmlFor="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <span>保持登入</span>
                        </label>
                    </p>
                    <button type="submit">登入</button>
                    <p><Link to='/my-account/lost-password'>忘記您的密碼？</Link></p>
                </form>
            </div>
            <div className="register">
                <h2>加入會員</h2>
            </div>
        </div>
    );
}
export default Login;