import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, Login, ProfileInfo} from './Componentes/pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Profile" element={<ProfileInfo/>}/>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

