import React, {useState} from "react";
import {Categories} from "./Cat";

interface NewCatProps {
    handleAdd: (name: string, categ: Categories) => void;
    handleToggle: () => void;
}

export  default function NewCat(props: NewCatProps) {
    const [nameInput, setNameInput] = useState("");
    const [categoryInput, setCategoryInput] = useState(Categories.v);

    function optionHandle(event: any) {
        switch (event.target.value){
            case Categories.v: {
                setCategoryInput(Categories.v);
                break;
            }
            case Categories.feh: {
                setCategoryInput(Categories.feh);
                break;
            }
            case Categories.fek: {
                setCategoryInput(Categories.fek);
                break;
            }
            case Categories.c: {
                setCategoryInput(Categories.c);
                break;
            }
            case Categories.sz: {
                setCategoryInput(Categories.sz);
                break;
            }
            case Categories.e: {
                setCategoryInput(Categories.e);
                break;
            }
        }
    }

    function addNew() {
        props.handleAdd(nameInput, categoryInput)
        props.handleToggle()
    }

    return (
        <div>
            <h1>Új macska</h1>
            <label>Macska neve:
                <input type="text" value={nameInput} onChange={(event) => setNameInput(event.target.value)}/>
            </label><br/>
            <label>Macska színe:
                <select onClick={optionHandle}>
                    <option value={Categories.v}>Vörös</option>
                    <option value={Categories.fek}>Fekete</option>
                    <option value={Categories.feh}>Fehér</option>
                    <option value={Categories.c}>Cirmos</option>
                    <option value={Categories.sz}>Szürke</option>
                    <option value={Categories.e}>Egyéb</option>
                </select></label>
            <br/>
            <button onClick={addNew}>Felvétel</button>
        </div>
    );
}