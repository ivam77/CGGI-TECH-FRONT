import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsActions from '../redux/actions/productsActions.js';
import { Link as Anchor } from 'react-router-dom';
export default function HomeAppliances() {
const dispatch = useDispatch();
const read_products = useSelector((store) => store.products.products);
useEffect(() => {
    dispatch(productsActions.read_products());
}, [dispatch]);
console.log(read_products);
const formatCurrency = (amount) => {
    if (typeof amount === 'number') {
      return `USD $${amount.toFixed(0)}`;
    } else {
      return '';
    }
  };
  return (
    <div className='flex'>
      <div className='w-[120rem] h-screen py-[3rem] px-[1.5rem]'>
        <p className='text-[1.3rem] text-[gray]'>Filter by type of appliance</p>
        <p className='mt-[3rem] text-[1.2rem] text-[gray]'>Select product</p>
        <hr className='border-[#c9c6c6] mt-2' />
        <div className='flex flex-col gap-[1rem] mt-[1rem]'>
      <div className='flex items-center mt-[2rem]'>
      <input type='checkbox' id='product1' className='mr-2' />
      <label htmlFor='product1'>Tv</label>
    </div>
    <div className='flex items-center mt-1'>
      <input type='checkbox' id='product2' className='mr-2' />
      <label htmlFor='product2'>Fridges</label>
    </div>
    <div className='flex items-center mt-1'>
      <input type='checkbox' id='product3' className='mr-2' />
      <label htmlFor='product3'>Laundry</label>
    </div>
    <div className='flex items-center mt-1'>
      <input type='checkbox' id='product4' className='mr-2' />
      <label htmlFor='product4'>Blenders</label>
    </div>
    <div className='flex items-center mt-1'>
      <input type='checkbox' id='product5' className='mr-2' />
      <label htmlFor='product5'>Cooks</label>
    </div>
    <div className='flex items-center mt-1'>
      <input type='checkbox' id='product6' className='mr-2' />
      <label htmlFor='product6'>Air conditioners</label>
    </div>
        </div>
    </div>
    <div className="flex flex-wrap justify-center py-[2rem] bg-[#e2e1e1]">
      {read_products.filter((element) => element.category === 'Electrodomestics' || element.type === 'TV').map((filteredElement) => (
          <Anchor to={`/products/${filteredElement._id}`}>
      <div className="flex flex-col justify-center text-center p-8 items-center m-2 bg-white h-[300px] lg:h-[25rem] rounded-2xl drop-shadow-xl hover:border-4 w-[300px]">
    <img className="mb-4 h-[100px] lg:h-[10.8rem]" key={filteredElement._id} src={filteredElement.cover_photo[0]} alt="jg"  />
  <p className="text-[18px] mb-2 " >{filteredElement.title}</p>
  <p className="font-semibold md:text-[22px] mb-2">{formatCurrency(filteredElement.price)}</p>
  <p className="font-semibold text-lime-700 md:text-[18px] mb-2">Withdraw it NOW!</p>
</div>
  </Anchor>
))}
    </div>
    </div>
  );
}
