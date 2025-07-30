import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

/*
const reactElement = {
    type : 'a',
    props: {
        href: "https://youtube.com",
        target: '_blank'
    },
    children: 'click to visit Youtube '
    
} */
    const anotheSite = 'https://google.com'
    const ReactElement = React.createElement(  // how react make an object of html element
      'a',    //element
      {          // attributes
        href:"https://youtube.com",
        target: '_blank'
      },
      'Click to visit Google',  //innerHTML
      anotheSite               //Evaluated Expression
    )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ReactElement/> */}
  </StrictMode>,
)
