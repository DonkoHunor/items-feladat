import React, {useState} from 'react';
import {catList} from "./CatList";
import Cat, {Categories} from "./Cat";
import {CatItemProps} from "./CatItemProps";

function App() {
    const [toggleNew, setToggleNew] = useState(true);
    const [toggleDelete, setToggleDelete] = useState(true);
    const [catListState, setCatList] = useState(catList);

    function toggle() {
        if (toggleNew){
            setToggleNew(false);
        }
        else{
            setToggleNew(true);
        }
    }

    function NewCat() {
        const [nameInput, setNameInput] = useState("");
        const [categoryInput, setCategoryInput] = useState(Categories.v);
        function addCat() {
            setCatList(catListState => [...catListState, {name: nameInput, category: categoryInput}])
            toggle()
        }

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
                <button onClick={addCat}>Felvétel</button>
            </div>
        );
    }

    function deleteCat(catNameinput: string){
        const update = catListState.filter(cat => cat.name !== catNameinput);
        setCatList(update);
    }

    function handleDelete() {
        if (toggleDelete){
            setToggleDelete(false);
            return toggleDelete;
        }else{
            setToggleDelete(true);
            return toggleDelete;
        }
    }
    function ListCats() {


        return (
            <div>
                <h1>Macskák</h1>
                {catListState.map((cat) =>
                    <CatItem
                        name={cat.name}
                    />)}
            </div>
        );
    }

    function CatItem(props :CatItemProps) {
        return <div>
            <p>
                {props.name}
                {toggleDelete ?
                    <button onClick={confirmDelete}>Delete</button>:
                    <div>
                        <button onClick={deleteHandler}>Yes</button>
                        <button>No</button>
                    </div>
                }
            </p>
        </div>
    }

  return (
      <div>
      {toggleNew ? (
              <div>
                  <ListCats/>
                  <button onClick={toggle}>Új macska</button>
              </div>) :
              <div>
                  <NewCat/>
                  <button onClick={toggle}>Vissza</button>
              </div>
      }
      </div>);
}
export default App;
