import React from "react";
import { NamesBook } from "./nameBook";

interface props {
    item: string;
    id: number;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    names: Array<NamesBook>;
    setNames: React.Dispatch<React.SetStateAction<NamesBook[]>>;
    isDone: boolean;
}
const SingleName:React.FC<props> = ({item, id, name, setName, names, setNames, isDone}) => {

    const handleDone = (id: number) => {
        setNames(
            names.map((name) =>
              name.id === id ? { ...name, isDone: !name.isDone } : name
            )
          );
    };

    const handleDelete = (id: number) => {
        setNames(
            names.filter((name) =>
              name.id !== id 
            )
          );
    };

    const checkDone = (isDone: boolean) => {
        if(isDone) {
            return (<>{item}</>);
        } else {
            return (<><s>{item}</s></>);
        }
    }

    return <div>
        {checkDone(isDone)}<br></br>
        <button onClick={()=>{handleDone(id)}}>Done</button><br></br>
        <button onClick={()=>{handleDelete(id)}}>Delete</button><br></br>
    </div>;
}

export default SingleName;