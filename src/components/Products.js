import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function Products({addToCart, setFilter, filter}) {
  const cats = ['All','Computer','Printer','Camera','Tools'];
  const visible = products.filter(p => (filter==='All' || p.category===filter));
  return (
    <div className="container" style={{marginTop:20}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <div style={{display:'flex',gap:8,overflow:'auto'}}>
          {cats.map(c => (
            <button key={c} onClick={()=>setFilter && setFilter(c)} className={filter===c? 'btn' : ''} style={{padding:'8px 12px',borderRadius:999}}>{c}</button>
          ))}
        </div>
        <div style={{color:'#374151'}}>{visible.length} products</div>
      </div>

      <div id="products" className="grid">
        {visible.map(p => <ProductCard key={p.id} p={p} addToCart={addToCart} />)}
      </div>
    </div>
  );
}
