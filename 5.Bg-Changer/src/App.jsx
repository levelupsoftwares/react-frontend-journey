import { useState } from "react"

function App() {
  const [color , setColor] = useState("white")

  return (
    
      <div className="w-full h-screen bg-green-500 fixed"
      style={{backgroundColor : color}}>
          <div className="bg-black rounded-4xl p-4 mt-2 flex flex-wrap justify-center items-center gap-3">
             <button className="bg-white rounded-full p-3 cursor-pointer text-red-600" onClick={()=>{setColor('red')}}>Red</button>
             <button className="bg-white rounded-full p-3 cursor-pointer text-green-800" onClick={()=>setColor('green')}>Green</button>
             <button className="bg-white rounded-full p-3 cursor-pointer text-blue-700" onClick={()=>setColor('blue')}>Blue</button>
             <button className="bg-white rounded-full p-3 cursor-pointer text-yellow-400" onClick={()=>setColor('yellow')}>Yellow</button>
             <button className="bg-white rounded-full p-3 cursor-pointer text-green-400" onClick={()=>setColor('olive')}>olive</button>
             <button className="bg-white rounded-full p-3 cursor-pointer" onClick={()=>setColor('white')}>white</button>
          </div>
      </div>
   
  )
}

export default App
