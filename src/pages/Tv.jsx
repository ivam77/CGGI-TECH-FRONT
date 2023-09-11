import React from 'react';
import Product from '../components/product.jsx';

export default function Tv() {
  const prop = "TV";

  return (
    <div >
      <div className='w-full h-[30vh]'>
        <img  className='h-[60vh] w-full' src="https://andinalink.com/wp-content/uploads/2017/12/MainKV_without-title-0.jpg" alt="" />
      </div>
      <Product property={prop} />
    </div>
  );
}