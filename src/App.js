import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, Login, ProfileInfo, Review, DetailsKeyboard, DetailsNvidia, Detailsintelcore} from './Componentes/pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Profile" element={<ProfileInfo/>}/>  
          <Route path="/Review" element={<Review/>}/> 
          <Route path="/DetailsNvidia" element={<DetailsNvidia/>}/> 
          <Route path="/Detailsintelcore" element={<Detailsintelcore/>}/> 
          <Route path="/DetailsKeyboard" element={<DetailsKeyboard/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

