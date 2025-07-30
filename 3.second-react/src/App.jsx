import { useState } from 'react'


import './App.css'

function App() {

  
  let [counter , setCounter] = useState(10); //  useState gives the array with 2  methods, 
                                             //  1st method have a initial value  
                                             //  2nd method used ,when to store updated value
  let addValue = ()=>{
  if(counter > 0 && counter <= 20){
        
      setCounter( counter + 1);
      setCounter( counter + 1);
      setCounter( counter + 1);

    console.log(counter);
  }
  else if(counter > 20){
    // let alert = React.createElement("p",{}, "Number exed from requirment");
    alert("Number exed from requirment");
  }
      
  }
  let removeValue = ()=>{
   if(counter >= 0){
      
    setCounter(counter--);
    console.log(counter);
   } 
    
  }

  return (
    <>
      <h1>The Counter Project</h1>
      <h3>Value of Counter = {counter}</h3>

      <button onClick={ addValue }>Add value {counter}</button>

      <button onClick={ removeValue }>Remove value {counter}</button>
      <footer>Final value: {counter}</footer>
      {alert}
    </>

  )
}

export default App
