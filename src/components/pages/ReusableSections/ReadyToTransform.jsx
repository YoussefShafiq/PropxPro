import React from 'react'
import GetStarted from '../../Buttons/GetStarted'

export default function ReadyToTransform({ title = "Ready to transform your team's Management? ", description = "Experience how PropXPro makes project management simple & teamwork effortless!" }) {
    return <>
        <div className="bg-[#131e57] py-10">
            <div className="container flex flex-col gap-10 items-center" >
                <div className="text-center text-3xl lg:text-5xl leading-[133%] font-extrabold text-white lg:px-44">{title}</div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-white text-opacity-80 lg:px-80">{description}</div>
                <GetStarted />
            </div>
        </div>
    </>
}
