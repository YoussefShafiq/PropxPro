import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LearnMore({ path }) {

    const navigate = useNavigate()

    return <>
        <div className="relative bg-black h-[56px] w-full lg:w-[182px] rounded-lg">
            <button onClick={() => path != null ? navigate(path) : ''} className="absolute left-0 hover:-translate-x-1.5 hover:-translate-y-1.5  hover:border-black border-[2px] border-transparent bg-lightBlue text-white h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold transition-all duration-300">Learn more</button>
        </div>
    </>
}
