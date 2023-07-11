

import React from "react";
import './../styles/App.css';
import { useState } from 'react'


const App = () => {
  let[name, setName] = useState("");
   const handleChange = (event) => {
    setName(event.target.value);
  };

  const generateGreeting = () => {
    return name ? `Hello, ${name}!` : '';
  };
  return (
      <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>{generateGreeting()}</p>
    </div>
  )
}

export default App
