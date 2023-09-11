import React from 'react';
import Product from '../components/product.jsx';

export default function Air() {
  const prop = "Air";

  return (
    <div>
     <div className='w-full h-[30vh]'>
      <img className='h-[60vh] w-full' src="https://cdn.shopify.com/s/files/1/0223/6897/6968/files/AKL_Banners_Beneficios.jpg?v=1559681789" alt="" /></div> 
      <Product property={prop} />
    </div>
  );
}