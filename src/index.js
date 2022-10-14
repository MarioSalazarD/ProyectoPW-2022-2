import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Choseen from './components/h10/Choseen';
import Builder from './components/h10/Builder(h11)';
import Offer02 from './components/h10/Offers(h11)/Offer02';
import Offer03 from './components/h10/Offers(h11)/Offer03';
import Offer04 from './components/h10/Offers(h11)/Offer04';
import Offer05 from './components/h10/Offers(h11)/Offer05';
import Offer06 from './components/h10/Offers(h11)/Offer06';

export default function App2(){
  return(
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Choseen />}/>
      <Route path='/offer/1' element={<Builder />}/>
      <Route path='/offer/2' element={<Offer02 />}/>
      <Route path='/offer/3' element={<Offer03 />}/>
      <Route path='/offer/4' element={<Offer04 />}/>
      <Route path='/offer/5' element={<Offer05 />}/>
      <Route path='/offer/6' element={<Offer06 />}/>

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
