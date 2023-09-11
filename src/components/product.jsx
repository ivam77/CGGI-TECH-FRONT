import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api, apiUrl, endpoints } from '../utils/api';
import { setProduct } from '../redux/actions/product';
import { Link as Anchor } from 'react-router-dom';

export default function Product(props) {

  const prop = props.property;

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const [tvProducts, setTvProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.products);
      dispatch(setProduct(data.response));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {

    if (Array.isArray(allProducts)) {
      setTvProducts(allProducts.filter((product) => product.type === prop));
    }
  }, [allProducts]);

  const formatCurrency = (amount) => {
    if (typeof amount === 'number') {
      return `USD $${amount.toFixed(0)}`;
    } else {
      return '';
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {tvProducts.map((product) => (
        <div key={product._id} className="flex flex-col justify-center text-center p-8 items-center m-2 bg-white h-[300px] lg:h-[450px] rounded-2xl drop-shadow-xl hover:border-4 w-[300px]">
          <Anchor to={`/products/${product._id}`}>
          <img src={product.cover_photo[0]} alt={product.title} className="mb-4 h-[100px] lg:h-[250px]" />
          <p className="text-[18px] mb-2">{product.title}</p>
          <p className="font-semibold md:text-[22px] mb-2">{formatCurrency(product.price)}</p>
          <p className="font-semibold text-lime-700 md:text-[18px] mb-2">Withdraw it NOW!</p>
          </Anchor>
        </div>
      ))}
    </div>
  );
}