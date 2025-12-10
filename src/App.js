import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import SidebarCart from './components/SidebarCart';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import { products } from './data/products';

export default function App(){
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setOpen(true);
  };

  const removeFromCart = (idx) => {
    setCart(prev => prev.filter((_,i)=>i!==idx));
  };

  const clearCart = () => setCart([]);

  const handleSetSearch = (q) => setSearch(q);

  // optional: pass filtered products into Products (component currently reads from data)
  return (
    <div>
      <Header cartCount={cart.length} openCart={()=>setOpen(true)} setSearch={handleSetSearch}/>
      <Hero />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} setFilter={setFilter} filter={filter} />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
      </Routes>
      <SidebarCart open={open} close={()=>setOpen(false)} cart={cart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}
