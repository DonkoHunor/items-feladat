import React, {useState} from 'react';
import {catList} from "./CatList";
import NewCat from "./NewCat";
import CatItem from "./CatItem";
import Cat, {Categories} from "./Cat";
import FilterButton from "./FilterButton";
import "./myStyle.css"

function App() {
    const [toggleNew, setToggleNew] = useState(true);
    const [catListState, setCatList] = useState(catList);
    const [categFilter, setCategFilter] = useState<Categories | undefined>();
    const [search, setSearch] = useState('');

    function handleDelete(name: string) {
        const updateList = catListState.filter(cat => cat.name !== name);
        setCatList(updateList);
    }
    function handleAdd(name: string, categ: Categories) {
        setCatList([...catListState, {name: name, category: categ}]);
    }

    function handleFilter(categ: Categories | undefined) {
        setCategFilter(categ);
    }

    function toggle() {
        if (toggleNew){
            setToggleNew(false);
        }
        else{
            setToggleNew(true);
        }
    }

    function getCategories(list: Cat[]): Categories[] {
        const resultList: Categories[] = [];
        list.forEach((cat) => {
            if(!resultList.includes(cat.category)) {
                resultList.push(cat.category);
            }
        });
        return resultList;
    }

    function ListCats() {
        return (
            <div>
                {catListState.filter((item) => {
                    if(item.category !== categFilter && categFilter !== undefined) {
                        return false;
                    }
                    if(search.toLowerCase() === ''){
                        return item;
                    }
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }).map((cat) =>
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
                  <h1>Macskák</h1>
                  <button onClick={() => handleFilter(undefined)}>Összes</button>
                  {getCategories(catListState).map((categ) => <FilterButton categName={categ} handleFilter={() => handleFilter(categ)}/>)}<br/><br/>
                  Keresés: <input placeholder="Név" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
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
