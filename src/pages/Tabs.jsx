import React from 'react';
import Product from '../components/product.jsx';

export default function Tabs() {
  const prop = "Tabs";

  return (
    <div>
      <div className='w-full h-[30vh]'>
        <img className='h-[60vh] w-full'  src="https://nastec.eu/es/wp-content/uploads/2019/12/NSC-tablet-banner-desktop.jpg" alt="" />
      </div>
      <Product property={prop} />
    </div>
  );
}