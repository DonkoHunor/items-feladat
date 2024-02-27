import {Categories} from "./Cat";

interface FilterButtonProps {
    categName: Categories;
    handleFilter: () => void;
}
export default function FilterButton(props: FilterButtonProps) {
    return <button onClick={props.handleFilter}>{props.categName}</button>
}