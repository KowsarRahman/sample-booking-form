import React, { ReactEventHandler, useState } from 'react';
import Form from './components/Form';
import { NamesBook } from './components/nameBook';

function App() {

  const [name, setName] = useState<string>("");
  const [names, setNames ] = useState<Array<NamesBook>>([]);

  const handleAdd:ReactEventHandler = (e) => {

    e.preventDefault();
    if(name) {
      setNames([...names, {id: Date.now(), name: name, isDone: true}]);
      setName("");
    }

  }


  return (
    <div className="App">
      <Form name={name} setName={setName} handleAdd={handleAdd} names={names} setNames={setNames}/>
    </div>
  );
}

export default App;
