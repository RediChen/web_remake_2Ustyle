import { FC } from "react";

const LostPassword:FC = () => {
    return(<>
    <form className="reset-password">
        <p>忘記您的密碼了嗎？</p>
        <p>請輸入您之前於 2Ustyle 訂購商品時所使用之電子郵件，您將會收到由系統發出的確認信郵件，並請您遵照郵件指示重建您的購物密碼。</p>
        <p>
            <label htmlFor="reset-login"></label>
            <input type="text" id="reset-login" />
        </p>
    </form>
    </>);
}
export default LostPassword;