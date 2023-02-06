import './App.css';
import Cards from './component/cards/cards';
import Header from './component/header/header';
import Trends from './component/trendSection/trends';
import { cartContext } from './component/cart-context';
import { BrowserRouter, Routes, Route, UseNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddedItem from './component/purchased-items/added-items';
import Footer from './component/footer/footer';
import Login from './component/loginPage/login';
import Signup from './component/register/register';
import Logout from './component/logout/logout';
import Protected from './component/protectedRoutes/protectes-Routes';
function App() {
  const [cartCount, setCartCount] = useState([]);
  return (
    <div className="App">
      <cartContext.Provider value={{ cartCount, setCartCount }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<> <Header />   <Trends />  <Cards />  <Footer /></>} />
            <Route path='/cartItems' element={<Protected><AddedItem /></Protected>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>

    </div>
  );
}

export default App;
