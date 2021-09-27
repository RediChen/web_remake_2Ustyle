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
                    【慶中秋】滿990．就免運！（立即省120元）<wbr />
                    &#x21E8;&nbsp;
                    <Link to="/"><u>查看活動內容</u></Link>
                </p>
                <button onClick={handleClick}><i />&nbsp;我知道了！</button>
            </div >
            : <></>
    );
}
export default InfoBox;