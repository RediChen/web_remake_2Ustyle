import { FC } from "react";
interface IContactBoxProps {
    text?: string | undefined;
}
const ContactBox: FC<IContactBoxProps> = ({ text = "需要協助訂購嗎？" }) =>
    <div className="contact-box">
        <h1>{text}</h1>
        <div>
            <div className="home-contact-card">
                <i />
                <div>
                    <h2>寫email給我們</h2>
                    <a href="mailto:service@2ustyle.com">service@2ustyle.com</a>
                </div>
            </div>
            <div className="home-contact-card">
                <i />
                <div>
                    <h2>撥電話給我們</h2>
                    <a href="tel:02-2791-2816">02-2791-2816</a>
                </div>
            </div>
            <div className="home-contact-card">
                <i />
                <div>
                    <h2>電話服務時間</h2>
                    <span>10:00~13:00、14:00~17:00</span>
                </div>
            </div>
        </div>
    </div>
export default ContactBox;