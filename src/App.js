import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, Login} from './Componentes/pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

