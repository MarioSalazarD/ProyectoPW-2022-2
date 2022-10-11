import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, Login, ProfileInfo, Review} from './Componentes/pages'

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

