import React from 'react';
import Product from '../components/product.jsx';

export default function Fridge() {
  const prop = "Fridge";

  return (
    <div>
      <div className='w-full h-[30vh]'>
        <img className='h-[60vh] w-full'  src="https://global.hisense.com/dam/jcr:9a51b3a5-c010-445d-aabe-fdd7c388f5bf/Fridge_1@2x.jpg" alt="" />
      </div>
      <Product property={prop} />
    </div>
  );
}