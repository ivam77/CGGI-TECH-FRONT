import React from 'react';
import Product from '../components/product.jsx';

export default function Phones() {
  const prop = "Phones";

  return (
    <div>
    <div className='w-full h-[30vh]'>
      <img className='h-[60vh] w-full ' src="https://about.att.com/ecms/dam/snr/2019/September2019/StoryLevelBanner/1294%20-%20Apple%20iPhone%20AnnouncementSTORY_LEVEL_BANNER_1600x483.jpg" alt="sdfs" />
    </div> 
      <Product property={prop} />
    </div>
    
  );
}