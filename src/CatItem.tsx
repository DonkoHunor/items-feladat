import React, {useState} from "react";

interface CatItemProps {
    name: string;
    handleDelete: (name: string) => void;
}

export default function CatItem(props :CatItemProps) {

    const [toggleDelete, setToggle] = useState(true);

    return <div>
        <p>
            {props.name}
            {toggleDelete ?
                <button onClick={() => setToggle(false)}>Delete</button>:
                <div>
                    <button onClick={() => props.handleDelete(props.name)}>Yes</button>
                    <button onClick={() => setToggle(true)}>No</button>
                </div>
            }
        </p>
    </div>
}