import { useState } from 'react';
import './App.css';
import Form  from './Form';
import Table from './Table';

let ID = 0;

function App() {
  
  const [users, setUser] = useState([])
  const point = -1;
  
  function onSubmitForm(data) {
    setUser([...users, {id:ID++, name: data.name, color: data.color, point: data.point}])
  }
  
  function onDeletehandle(id) {
    setUser(users => users.filter(user => user.id !== id))
  }
  function randomFunc () {
    const rndInt = Math.floor(Math.random() * 3) + 1
    return rndInt

  }
  function Score(point){
    //ewerwerwr
    if (point === 4 ) {
      point = randomFunc()
    }
    
    setUser(users => users.map((user)=>{
      let clone = {...user}

      if (user.color === 'red' && point === 1) {
        clone.point++        
      }
      if (user.color === 'blue' && point === 2) {
        clone.point++        
      }
      if (user.color === 'yellow' && point === 3) {
        clone.point++        
      }

      return clone
    }))
  }
  
  return (
    <div className="App">
        <Form onSubmitForm={onSubmitForm} />
        {<Table users={users} onDeletehandle={onDeletehandle}/>}
        <h1>Give points to any team!</h1>      
        <button onClick={() =>{Score(1)}}>Red</button>
        <button onClick={() =>{Score(2)}}>Blue</button>
        <button onClick={() =>{Score(3)}}>Yellow</button>
        <button onClick={() =>{Score(4)}}>Random</button>
      </div>
  );
}

export default App;