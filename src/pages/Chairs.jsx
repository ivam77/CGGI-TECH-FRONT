import React from 'react';
import Product from '../components/product.jsx';

export default function Chairs() {
  const prop = "Chair";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full' src="https://storage-asset.msi.com/global/picture/image/feature/multimeda/Chairs/ch120i/kv.jpg" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}