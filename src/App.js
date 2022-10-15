import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Checkout, Building, Detailsintelcore, DetailsKeyboard, DetailsNvidia, HomePage, Login, ProfileInfo, Ranking, Register, Review, ShoppingHistory, UserReviews, FAQ, Support, Guides, About, Ticket, Shopingcar} from './Componentes/pages';

import Choseen from './Componentes/historias(suga)/Choseen(h10)';
import Builder from './Componentes/historias(suga)/Builder(h11)';
import Offer02 from './Componentes/historias(suga)/Offers(h11)/Offer02';
import Offer03 from './Componentes/historias(suga)/Offers(h11)/Offer03';
import Offer04 from './Componentes/historias(suga)/Offers(h11)/Offer04';
import Offer05 from './Componentes/historias(suga)/Offers(h11)/Offer05';
import Offer06 from './Componentes/historias(suga)/Offers(h11)/Offer06';
import Rankinpc from './Componentes/historias(suga)/RankinPC(h24)';
import Estrellas from './Componentes/historias(suga)/Estrellas(h22)';


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

          <Route path="/recomend" element={<Choseen/>}/>
          <Route path="/offer/1" element={<Builder/>}/>
          <Route path="/offer/2" element={<Offer02/>}/>
          <Route path='/offer/3' element={<Offer03 />}/>
          <Route path='/offer/4' element={<Offer04 />}/>
          <Route path='/offer/5' element={<Offer05 />}/>
          <Route path='/offer/6' element={<Offer06 />}/>
          <Route path='/ranking-pc' element={<Rankinpc />}/>
          <Route path='/rate' element={<Estrellas />}/>









        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;