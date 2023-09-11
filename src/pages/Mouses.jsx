import React from 'react';
import Product from '../components/product.jsx';

export default function Mouses() {
  const prop = "Mouse";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://xtech-frontend.s3.amazonaws.com/media/img/Banners-Sub-categoria-Gaming-Mice-DK.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}