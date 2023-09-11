import React from 'react';
import Product from '../components/product.jsx';

export default function Laundrys() {
  const prop = "Laundry";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://www.houseandhome.co.za/pub/media/wysiwyg/shop-by-room/laundry/desktop/89911%20HH%20Corporate%20Brand%20New%20Website%201520x595.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}