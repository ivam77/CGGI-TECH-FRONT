import React from 'react';
import Product from '../components/product.jsx';

export default function Pc() {
  const prop = "pc";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://newgendistribution.com/wp-content/uploads/2020/09/gaming-banner3.png" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}