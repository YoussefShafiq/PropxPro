import React from 'react'
import GetStarted from '../../Buttons/GetStarted'

export default function FeaturesHeroSection({ heroImg, headline, description, resources = false, aboutflag = false }) {
    return <>
        <div className="container !pt-0 flex flex-wrap lg:flex-nowrap gap-5 justify-between items-center">
            <div className="lg:w-3/5 py-8 flex flex-col gap-5 text-center lg:text-left">
                {resources ? <h1 className='text-4xl lg:text-6xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>{headline}</h1>
                    : <h1 className={`text-4xl ${aboutflag ? 'lg:text-6xl' : 'lg:text-7xl'} font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue`}>{headline}</h1>}

                <p className={`lg:text-2xl lg:leading-9 font-medium text-darkText text-opacity-80 lg:pe-16`}>{description} </p>
                {!resources && <GetStarted />}
            </div>
            <div className="lg:w-1/2 lg:ms-16 overflow-hidden">
                <img src={heroImg} className='rounded-b-xl lg:h-full' alt={headline} />
            </div>
        </div>
    </>
}
