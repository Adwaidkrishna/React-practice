import "./App.css";
import { useState } from "react";

function App (){

  const [count,setCount]=useState(0)

  function increment(){
    setCount(count+1)
  }

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}

/*
import Student from "./student";

function App () {
  return (
    <div>
      <Student
      name='adwaid'
      age='20'
      course='mern'
      />
    </div>
  )
}


import Welcome from "./welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

*/

export default App