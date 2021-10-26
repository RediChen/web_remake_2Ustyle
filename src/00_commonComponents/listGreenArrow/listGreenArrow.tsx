import { FC } from "react";
import GreenArrow from "./greenArrow";
interface IListProps {
    items: string[]
}
const ListGreenArrow: FC<IListProps> = ({ items }) =>
    <ul className="green-arrow-list">
        {items.map(item => <li><GreenArrow />{item}</li>)}
    </ul>
export default ListGreenArrow;