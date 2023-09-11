import React from 'react';
import Product from '../components/product.jsx';

export default function Kitchens() {
  const prop = "Kitchen";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://static.vecteezy.com/system/resources/previews/012/332/471/non_2x/close-up-of-a-blue-fire-from-a-kitchen-stove-4-gas-burners-with-a-burning-flame-economy-concept-wide-banner-free-photo.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}