import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselProducts({ items, title }) {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 600 },
            items: 3
        },

        mobile: {
            breakpoint: { max: 600, min: 430},
            items: 2
        },

    };

    return (
        <div className="flex flex-col ">
            <h1 className="title">{title}</h1>
            <Carousel responsive={responsive}>
                {items?.map((item, index) => (
                    <div
                        key={item._id}
                        className="carousel bg-[white] w-[20rem] h-[30rem] rounded-[10px] p-[1rem] "
                            
                    >
                        <Anchor to={`/products/${item._id}`}>
                            <img
                                src={item.cover_photo[0]}
                                alt={`Slide ${index + 1}`}
                                className="image mx-auto w-full h-[20rem] object-contain py-[1rem]
                                "
                            />
                        </Anchor>
                        <h3 className=" text-center text-gray-800">{item.brand}</h3>
                        <h4 className="text-center text-gray-800">{item.title}</h4>
                        <p className="text-center text-gray-500 text-[1.2rem]">
                            USD$ {item.price}
                        </p>
                        <p className="text-center text-[#5ea85e]">Withdraw it NOW!</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}