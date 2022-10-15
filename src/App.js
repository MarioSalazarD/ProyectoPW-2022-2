import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Checkout, Building, Detailsintelcore, DetailsKeyboard, DetailsNvidia, HomePage, Login, ProfileInfo, Ranking, Register, Review, ShoppingHistory, UserReviews, FAQ, Support, Guides, About, Ticket, Shopingcar} from './Componentes/pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Profile" element={<ProfileInfo/>}/>  
          <Route path="/Review" element={<Review/>}/>  
          <Route path="/Detailsintelcore" element={<Detailsintelcore/>}/>  
          <Route path="/DetailsKeyboard" element={<DetailsKeyboard/>}/>  
          <Route path="/DetailsNvidia" element={<DetailsNvidia/>}/>  
          <Route path="/Ranking" element={<Ranking/>}/>
          <Route path="/Userreviews" element={<UserReviews/>}/>
          <Route path="/Shoppinghistory" element={<ShoppingHistory/>}/>
          <Route path="/Shopingcar" element={<Shopingcar/>}/>   
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/guides" element={<Guides/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/building" element={<Building/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;