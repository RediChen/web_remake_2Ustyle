import { FC } from "react";
import { Link } from "react-router-dom";

const Login: FC = () => {
    return (
        <div className="login-page">
            <div className="login">
                <h2>登入</h2>
                <form action="" className="user-login">
                    <p>
                        <label htmlFor="user-email" className="form-row">
                            電子信箱
                            <span className="required">*</span>
                        </label>
                        <input type="text" id="user-email" required />
                    </p>
                    <p>
                        <label htmlFor="password" className="form-row">
                            密碼
                            <span className="required">*</span>
                        </label>
                        <input type="password" id="password" required />
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
                <form action="" className="user-login">
                    <p>
                        <label htmlFor="user-email" className="form-row">
                            電子信箱
                            <span className="required">*</span>
                        </label>
                        <input type="text" id="user-email" required />
                    </p>
                    <p>
                        <label htmlFor="password" className="form-row">
                            密碼
                            <span className="required">*</span>
                        </label>
                        <input type="password" id="password" required />
                    </p>
                    <p>
                        <span>您的瀏覽數據將使用於處理您的訂單、最佳化您在網站的各項體驗，以及我們</span>
                        <Link to='/privacy-policy'>隱私權政策</Link>
                        <span>中描述的其他目的。</span>
                    </p>
                    <button type="submit">加入會員</button>
                </form>
            </div>
        </div>
    );
}
export default Login;