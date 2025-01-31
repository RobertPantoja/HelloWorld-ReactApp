import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button } from '@mui/material';


export default function HelloWorld() {
  return (
  <div className='content'>
    <h1 className='title'>Hello, World!</h1>
    <Button variant='contained' size='large' className='button'>Welcome to my App</Button>
  </div>
  )
  
}

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
