import React from 'react';
import Product from '../components/product.jsx';

export default function Notebooks() {
  const prop = "NOTEBOOK";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://www.universityofgalway.ie/media/informationsolutionsservices/images/servicesforstudents/AdobeStock_220815091.jpeg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}