import React, { useState, useEffect } from "react";

export default function Carousel() {
    const images = [
        "/public/banner/applebanner.png",
        "/public/banner/banner3.png",
        "/public/banner/bannerAppliances.png",
        "/public/banner/bannertv.png",
        "/public/banner/phonesPage.png",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 7000);
        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative">
            <div
                className="relative"
                onMouseEnter={() => setShowButtons(true)}
                onMouseLeave={() => setShowButtons(false)}
            >
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="w-full h-[33rem] max-sx:h-[15rem]"
                />
            </div>
            <button
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded opacity-0 hover:opacity-100 transition-opacity ${showButtons ? "opacity-100" : ""
                    }`}
                onClick={nextImage}
            >
                <svg
                    
                    className="w-7 h-7 text-gray-800 cursor-pointer bg-[white] rounded-[50px] p-[0.3rem]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
            <button
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded opacity-0 hover:opacity-100 transition-opacity ${showButtons ? "opacity-100" : ""
                    }`}
                onClick={prevImage}
            >
                <svg
                    className="w-7 h-7 text-gray-800 cursor-pointer bg-[white] rounded-[50px] p-[0.3rem]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
            </button>
        </div>
    );
}