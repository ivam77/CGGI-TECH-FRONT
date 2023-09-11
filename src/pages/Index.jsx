import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsActions from '../redux/actions/productsActions';
import CarouselProducts from '../components/CarouselProducts';
import Carousel from '../components/Carousel';
import { Link as Anchor } from "react-router-dom";

export default function Index() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.read_products());
  }, [dispatch]);

  const read_products = useSelector((store) => store.products.products);

  const moreViews = read_products?.filter((elemento) => elemento.Moreview === true);

  const imagesPhones = moreViews?.filter(item => item.type === "Phones" || item.type === "Tabs");
  const imagesDesktop = moreViews?.filter(item => item.type === "NOTEBOOK" || item.type === "DESKTOP");
  const imagesGamers = moreViews?.filter(item => item.type === "pc" || item.type === "Chair" || item.type === "Mouse");
  const imagesAudio = moreViews?.filter(item => item.type === "TV" || item.type === "SPEAKERS" || item.type === "HEADPHONES" || item.type === "MICROPHONE" || item.type === "CAMERAS");
  const imagesElectro = moreViews?.filter(item => item.type === "Fridge" || item.type === "Air" || item.type === "Kitchen" || item.type === "Blender" || item.type === "Laundry");

  return (
    <main className="bg-[white] w-full h-auto">
      <Carousel />
      <div className='gap-[5rem] p-[2.5rem] max-sx:gap-[2rem] flex justify-center items-center bg-[#e6e6e6]'>

        <Anchor to={'/homeAppliances'}>
          <button className=' flex flex-col items-center justify-center'>
            <img className='w-[10rem]' src="/public/icono-product/elec.png" alt="" />
            <p className='R text-[1.5rem] max-sx:hidden'>Home & Appliances</p>
          </button>
        </Anchor>

        <Anchor to={'/gamersPage'}>
          <button className=' flex flex-col items-center justify-center'>
            <img className=' w-[10rem]' src="/public/icono-product/pc.png" alt="" />
            <p className='R text-[1.5rem] max-sx:hidden'>Gamers</p>
          </button>
        </Anchor>

        <Anchor to={'/techsPage'}>
          <button className='flex flex-col items-center justify-center'>
            <img className=' w-[10rem]' src="/public/icono-product/table.png" alt="" />
            <p className='R  text-[1.5rem] max-sx:hidden'>Devices</p>
          </button>
        </Anchor>

      </div>
      <div className=" relative w-full flex px-[2rem] py-[1rem] flex-col justify-center bg-[#e6e6e6]">
        < CarouselProducts title="More views on Phones & tabs" items={imagesPhones} />
        < CarouselProducts title="More views on Desktops & Notebooks" items={imagesDesktop} />
        < CarouselProducts title="More views on Gamers" items={imagesGamers} />
        < CarouselProducts title="More views on Audio & Video" items={imagesAudio} />
        < CarouselProducts title="More views on Appliances" items={imagesElectro} />
      </div>
    </main>
  );
}