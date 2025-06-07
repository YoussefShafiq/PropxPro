import React from 'react'
import GetStarted from '../Buttons/GetStarted'
import dashboardImg from '../../assets/images/home/dashboard.png'

export function HeroSection() {
    return <>
        <div className="w-4/5 m-auto text-center flex flex-col gap-8 items-center py-28">
            <h1 className='font-extrabold text-7xl'>Experience smart, fast, and user-friendly PropXPro CRM</h1>
            <p className='font-medium text-2xl w-[65%] text-grayText' >The game-changer sales system—expertly designed to simplify every step of your real estate success!</p>
            <GetStarted />
        </div>
    </>
}

export default function Home() {
    return <>
        <HeroSection />
        <div className="w-5/6 m-auto">
            <img src={dashboardImg} className='w-full' alt="" />
        </div>
        <div className="py-28 space-y-4">
            <div className="text-3xl font-medium text-center text-grayText leading-9">Explore performance metric at a glance</div>
            <div className="text-7xl text-darkText text-center font-extrabold leading-[115%]">Close deals with ease & confidence</div>
        </div>
    </>
}
