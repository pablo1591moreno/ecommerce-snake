import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import CartWidget from './componentes/CartWidget/CartWidget';
import Product from './componentes/Pages/Product/Product';
import Home from './componentes/Pages/Home/Home';
import Cart from './componentes/Cart/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <nav className="navbar">
          <ul className='menu'>
            <NavLink to='/ecommerce-snake'><li>Inicio</li></NavLink>
            <NavLink to='/pageProduct'><li>Ropa</li></NavLink>
          </ul>
          <CartWidget />
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pageProduct/*' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

