import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button } from '@mui/material';

export default function DarkMode() {
  const [isClicked, setIsClicked] = useState(false)
  function Toggle1() {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked(isClicked => !isClicked);
  }

  return ( 
    <Button variant='contained' size='large' className='button' onClick={Toggle1}>
      Dark Mode: {isClicked ? "ON" : "OFF"} 
      </Button> 
  )
}


function HelloWorld() {  
  return (
  <div className='content'>
    <h1 className='title'>Hello, World!</h1>
    <DarkMode/>
  </div>
  )
}

let element = document.body;
element.classList.toggle("dark")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
