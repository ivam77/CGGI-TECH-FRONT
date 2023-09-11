import React from 'react';
import Product from '../components/product.jsx';

export default function Cameras() {
  const prop = "CAMERAS";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="http://claphamstudiohire.com/wp-content/uploads/2015/06/dslr-banner-1200x350.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}