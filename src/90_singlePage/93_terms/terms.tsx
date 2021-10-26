import { FC } from "react";
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import LayoutSinglePage from "../LayoutSinglePage";
import dataTerms from "./dataTerms";
import ListGreenArrow from "src/00_commonComponents/listGreenArrow/listGreenArrow";

const Terms: FC<IRCProps> = (props) => {
    return (
        <LayoutSinglePage titleZh="網站使用條款" titleEn="Terms" {...props}>
            <h1>歡迎您使用 2Ustyle 網站</h1>
            {dataTerms.map(chap =>
                <div className="terms-chap">
                    <h2>{chap.title}</h2>
                    <ListGreenArrow items={chap.items} />
                    {chap.quotes ?
                        <div className="terms-quotes">
                            <ul>
                                {chap.quotes.map(item => <li><i />{item}</li>)}
                            </ul>
                        </div>
                        : <></>
                    }
                </div>
            )}
            <h2>本同意書若有未盡之處，依中華民國法律解釋、補充及辦理。</h2>
        </LayoutSinglePage>
    );
}
export default Terms;