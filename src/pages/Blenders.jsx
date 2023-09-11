import React from 'react';
import Product from '../components/product.jsx';

export default function Blenders() {
  const prop = "Blender";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://www.cucute.com/blog/wp-content/uploads/2019/11/vitamix.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}