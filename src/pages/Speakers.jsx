import React from 'react';
import Product from '../components/product.jsx';

export default function Speakers() {
  const prop = "SPEAKERS";

  return (
    <div>
      <div className='w-full h-[30vh]'>
        <img className='h-[60vh] w-full'  src="https://kh.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dwb32f13a9/heros/4Flip%205%20Eco%20Homepage%20Banner%201800x1072.png" alt="" />
      </div>
      <Product property={prop} />
    </div>
  );
}