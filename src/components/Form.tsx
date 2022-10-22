import React from "react";
import { NamesBook } from "./nameBook";
import SingleName from "./SingleName";

interface props {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    names: Array<NamesBook>;
    setNames: React.Dispatch<React.SetStateAction<NamesBook[]>>;
}

const Form:React.FC<props> = ({name, setName, handleAdd, names, setNames}) => {


    return (
        <div className="App">
        <form onSubmit={(e)=>{handleAdd(e)}}>
            <input type="text" placeholder="Task" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button type="submit" >Get your name</button>
        </form>
        <h2>Existing Entries</h2>
        {names.map((items: NamesBook, key: number) => { return (
            <div >
                <SingleName key={key} item={items.name} id={items.id} name={name} setName={setName} names={names} setNames={setNames} isDone={items.isDone}/><br></br>
        </div>
        )})}
        </div>
    );
}


export default Form;