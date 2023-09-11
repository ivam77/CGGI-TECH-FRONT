import React from 'react';

export default function Arrow({ onClick, direction }) {
    return (
        <svg
            onClick={onClick}
            className={`w-7 h-7 text-gray-800 cursor-pointer bg-[white] rounded-[50px] p-[0.3rem] ${direction === 'next' ? 'ml-2' : 'mr-2'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
        >
            {direction === 'next' ? (
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            ) : (
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                />
            )}
        </svg>
    );
}