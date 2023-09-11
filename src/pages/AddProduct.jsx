import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/product.js';
import { api, apiUrl, endpoints } from '../utils/api.js';

export default function AddProduct() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [additionalFields, setAdditionalFields] = useState(null);
  const [additionalFieldsType, setAdditionalFieldsType] = useState(null);

  const read_products = useSelector((store) => store.products.products);
  const category = {read_products}

  console.log(category)

  return (
    <div className='flex p-6'>
      <div className="bg-white p-4 rounded shadow-md flex flex-col m-4 w-[50%]">
        <h2 className="text-xl font-semibold mb-2">General</h2>
        <input className="w-full p-2 border rounded mb-2" type="text" name="name" placeholder="Product Name" />
        <input className="w-full p-2 border rounded mb-2" type="text" name="brand" placeholder="Brand" />
        <select className="w-full p-2 border rounded mb-2" name="category">
            <option value="" disabled selected>Select category</option>
            <option value="1">Techs</option>
            <option value="2">TV, AUDIO & VIDEO</option>
            <option value="3">Gamers</option>
            <option value="4">Home & Appliances</option>
        </select>
        {additionalFields && (
          <div id="categoryFields">
            {additionalFields}
          </div>
        )}
      </div>
      <div className="bg-white p-4 rounded shadow-md flex flex-col m-4 w-[50%]">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
      </div>
    </div>
  );
}
