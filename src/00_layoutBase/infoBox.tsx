import { Link } from "react-router-dom"
import { FC, useState } from "react";

const InfoBox: FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        isOpen ?
            <div id="info-box">
                <p>
                    <i />&nbsp;
                    【超值優惠】全館滿&nbsp;990&nbsp;免運．滿&nbsp;3000&nbsp;再折&nbsp;300<wbr />
                    &nbsp;&#x21E8;&nbsp;
                    <Link to="/"><u>查看活動內容</u></Link>
                </p>
                <button onClick={handleClick}><i />&nbsp;我知道了！</button>
            </div >
            : <></>
    );
}
export default InfoBox;