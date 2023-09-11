import React from 'react';
import Product from '../components/product.jsx';

export default function Headphones() {
  const prop = "HEADPHONES";

  return (
    <div>
<div className='w-full h-[30vh]'>
  <img className='h-[60vh] w-full'  src="https://mc-fec8b19f-c7fd-4e56-8bfe-1850-cdn-endpoint.azureedge.net/society/-/media/content-hub/article-hero/thinking-well/play-it-safe-with-headphones-banner.jpg?h=700&iar=0&w=2686&rev=501f2239bea24415bcd168acd362c250&hash=2EAE3CE094DF35D6268BBD1BD9AA1E9C" alt="" />
</div>
      <Product property={prop} />
    </div>
  );
}