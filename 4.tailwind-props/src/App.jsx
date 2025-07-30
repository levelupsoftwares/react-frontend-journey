import { useState } from 'react'
import './App.css'
import Demo from './componenets/DemoComponent'


function App() {

  const colors = ['red' , 'green'];
  
  const user = {
     Name:'Usman',
     Learning:'React'
  }

  return (
    <>
     <p className='bg-amber-400'>this is from Tailwind</p>
     <Demo sms = "hello props" color = {colors}  user = {user} />
     
    </>
  )
}

export default App
