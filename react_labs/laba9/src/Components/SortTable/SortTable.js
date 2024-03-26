import {useState} from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import react from "react";
import "./SortTable.css"
import "./TableHeader.css"
import "./ArrowButtons.css"

export const SortTable = ({content}) => {

    const [array, setArray] = useState(content);

    const sortTable = (sortingValue, sortType) => {
        const direction = sortType === "ascending" ? 1 : -1;
        let newContent = array.sort((a, b) => {
            if (a.new && !b.new) {
                return -1;
            } else if (!a.new && b.new) {
                return 1;
            }

            if (sortingValue === 'name') {
                return a[sortingValue].localeCompare(b[sortingValue]) * direction;
            } else if (sortingValue === 'Discount') {
                return ((a[sortingValue] || 0) - (b[sortingValue] || 0)) * direction;
            } else {
                return (a[sortingValue] - b[sortingValue]) * direction;
            }
        });

        setArray([...newContent]);
    }

    return (
        <table>
            <TableHeader handler={sortTable}/>
            <TableBody array={array}/>
        </table>
    );
}
