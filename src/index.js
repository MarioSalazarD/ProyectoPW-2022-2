import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Builder from './components/h10/Builder(h11)';
import Choseen from './components/h10/Choseen';

export default function App2(){
  return(
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Choseen />}/>
      <Route path='/offer/1' element={<Builder />}/>
   
    </Routes>
    </BrowserRouter>
  )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
