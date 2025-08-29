import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RequestDemo({ mode }) {

    const navigate = useNavigate()

    if (mode == 'transparent') {
        return <button onClick={() => navigate('/request-demo')} className="text-black box-border border border-black h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold">Request a demo</button>

    } else {
        return <div className="relative bg-black h-[56px] w-full lg:w-[182px] rounded-lg">
            <button onClick={() => navigate('/request-demo')} className="absolute left-0 hover:-translate-x-1.5 hover:-translate-y-1.5  hover:border-black border-[2px] border-transparent bg-lightBlue text-white h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold hover:shadow-lg hover:bg-[#1e4c9d] transition-all">Request a demo</button>
        </div>
    }


}
