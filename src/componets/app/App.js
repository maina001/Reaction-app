import './App.css';
import Digit from "../digit/digit"
import { useState } from 'react';

function App() {
  const[click, setClick]=useState(0)

/  console.log("CLICKED",click,"times")
  return (
    <center >
      <ol type="i">
        <li>
        <Digit number="45"/>
        </li>
      </ol>
      <button onClick={()=>setClick(click+1)}>Randomise</button>
    </center>
  ); 
}

export default App;
