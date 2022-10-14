import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Detailsintelcore, DetailsKeyboard, DetailsNvidia, HomePage, Login, ProfileInfo, Ranking, Review} from './Componentes/pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Profile" element={<ProfileInfo/>}/>  
          <Route path="/Review" element={<Review/>}/>  
          <Route path="/Detailsintelcore" element={<Detailsintelcore/>}/>  
          <Route path="/DetailsKeyboard" element={<DetailsKeyboard/>}/>  
          <Route path="/DetailsNvidia" element={<DetailsNvidia/>}/>  
          <Route path="/Ranking" element={<Ranking/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

