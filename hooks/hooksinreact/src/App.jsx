import { useState  } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  let [counter , setCounter] = useState(120)
  // counter is the value returned and setcounter is function

  // let counter=5;
  const addvalue=()=>{
    console.log("VALUE ADDING function")
    counter=counter+1;
    setCounter(counter)
  }
  return (

    <>
     <h1>Counter project</h1>
     <h2> counter value {counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <br />
     <button>Remove value</button>
    </>
  )
}


export default App
