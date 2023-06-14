

import React from "react";
import './../styles/App.css';
import { useState } from 'react'


const App = () => {
  let[name, setName] = useState("");
    function handler(event){
        setName(event.target.value);
    }
  return (
     <>
     <P>Enter Your Name : </P>
     <input type="text" placeholder='enter your name' onChange={handler}/>
     <p>Hello {name}!</p>
     
     </>
  )
}

export default App
