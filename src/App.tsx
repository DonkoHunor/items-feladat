import React, {useState} from 'react';
import {catList} from "./CatList";
import NewCat from "./NewCat";
import CatItem from "./CatItem";
import {Categories} from "./Cat";

function App() {
    const [toggleNew, setToggleNew] = useState(true);
    const [catListState, setCatList] = useState(catList);

    function handleDelete(name: string) {
        const updateList = catListState.filter(cat => cat.name !== name);
        setCatList(updateList);
    }
    function handleAdd(name: string, categ: Categories) {
        setCatList([...catListState, {name: name, category: categ}]);
    }

    function toggle() {
        if (toggleNew){
            setToggleNew(false);
        }
        else{
            setToggleNew(true);
        }
    }

    function ListCats() {
        return (
            <div>
                <h1>Macskák</h1>
                {catListState.map((cat) =>
                    <CatItem
                        name={cat.name}
                        handleDelete={handleDelete}
                    />)}
            </div>
        );
    }

  return (
      <div>
      {toggleNew ? (
              <div>
                  <ListCats/>
                  <button onClick={toggle}>Új macska</button>
              </div>) :
              <div>
                  <NewCat handleAdd={handleAdd} handleToggle={toggle}/>
                  <button onClick={toggle}>Vissza</button>
              </div>
      }
      </div>);
}
export default App;
