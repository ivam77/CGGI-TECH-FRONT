import React from 'react';
import Product from '../components/product.jsx';

export default function Microphones() {
  const prop = "MICROPHONE";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://knowledge.csc.gov.sg/images/Landing_Banner_Images/banner_interview.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}