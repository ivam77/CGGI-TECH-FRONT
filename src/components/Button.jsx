import React from 'react'

export default function Button({text, onClick}) {
    return (
        <button
            onClick={onClick}
            type="submit"
            className="mt-2 w-[15rem] max-sx:w-[11rem] h-[3.5rem] rounded-lg bg-gradient-to-r from-[#448cdf] to-[#1970d4] text-white font-bold text-lg "
        >
            {text}
        </button>
    )
}