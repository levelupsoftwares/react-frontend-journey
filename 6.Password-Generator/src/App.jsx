import { useState , useCallback ,useEffect ,useRef} from 'react'

import './App.css'

function App() {

  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

 let passwordRef =useRef(null);


  let passwrodGenerator = useCallback(()=>{
    let str = "ABCCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrsuvwsyz";
    let pass = '';
    if(numAllowed){
      str+= '0123456789'
    }
    if(charAllowed){
      str+= '~!@#$%^&*()_+></{}[]';
    }

    for(let i =1 ; i< length ;i++){
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }
    , [length , numAllowed ,charAllowed ,setPassword])

 useEffect(()=>{passwrodGenerator()}
 ,[length,numAllowed,charAllowed])

 let copyToClipBoard = useCallback(()=>{
   window.navigator.clipboard.writeText(password);
   passwordRef.current?.select()}
          ,[password] )
    
  return (
      <div className='bg-black text-white h-screen w-full fixed'>
        <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3  bg-gray-600 my-10">
          <h1 className='text-center font-bold'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mt-5'>
            <input type="text" 
                   readOnly
                   className='line-none w-full py-1 px-3 bg-white text-red-500 font-bold'
                   value={password}
                   placeholder='Password'
                   ref={passwordRef} />
                   <button
                       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
                       onClick={copyToClipBoard}                       
                       >Copy
                      
                  </button>
          </div>
          <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1 mt-3'>
                 <input type="range" 
                        min={6}
                        max={36}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e)=>{setLength(e.target.value)}} /> 

                 <label>Length: {length}</label>

                 <input type="checkbox"
                        onChange={()=>{
                          setCharAllowed(prev => !prev) 
                        }}
                 />
                 <label htmlFor="">Char</label>

                  <input type="checkbox"
                         onChange={
                          ()=>{setNumAllowed(prev=>!prev)}
                         } />
                 <label htmlFor="">Num</label>
             </div>
          </div>
        </div>
         
      </div>
  )
}

export default App
