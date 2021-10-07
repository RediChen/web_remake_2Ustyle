import { FC } from "react";
import { RouteConfigComponentProps as IRCProps } from "react-router-config";
import LayoutSinglePage from "../LayoutSinglePage";
import ListArrow from "src/00_commonComponents/listArrow/listArrow";
import dataTerms from "./dataTerms";
// const listOutput = (items: string[]): JSX.Element[] => {

// }
const Terms: FC<IRCProps> = (props) => {
    return (
        <LayoutSinglePage titleZh="網站使用條款" titleEn="Terms" {...props}>
            <h1>歡迎您使用&nbsp;2Ustyle&nbsp;網站</h1>
            {dataTerms.map(chap =>
                <div className="terms-chap">
                    <h2>{chap.title}</h2>
                    <ul>
                        {chap.items.map(item =>
                            <li>
                                <ListArrow />{item}
                            </li>
                        )}
                    </ul>
                    {chap.quotes ?
                        <div className="terms-quotes">
                            <ul>
                                {chap.quotes.map(item =>
                                    <li>
                                        <i />{item}
                                    </li>
                                )}
                            </ul>
                        </div>
                        : <></>
                    }
                </div>
            )}
            <h1>本同意書若有未盡之處，依中華民國法律解釋、補充及辦理。</h1>
        </LayoutSinglePage>
    );
}
export default Terms;