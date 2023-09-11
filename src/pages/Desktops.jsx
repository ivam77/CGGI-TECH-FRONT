import React from 'react';
import Product from '../components/product.jsx';

export default function Desktops() {
  const prop = "DESKTOP";

  return (
    <div>
      <div className='w-full h-[30vh]'>
        <img className='h-[60vh] w-full' src="https://www.ontek.net/wp-content/uploads/2020/07/banner-producto-dell-espana.jpg" alt="" />
      </div>
      <Product property={prop} />
    </div>
  );
}