import React, { useEffect } from 'react'
import heroImg from '../../../assets/images/webinars/Frame39740.png'
import axios from 'axios'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import StayConnected from '../ReusableSections/StayConnected'
import WebinarsCard from './WebinarsCard'

export function HeroSection() {
    const headline = 'Webinars and live events '
    const description = 'Discover how Propxpro advanced AI features transform your business—enhancing your efficiency and confidence with every task.'

    const data = {
        img: heroImg,
        headline,
        description,
    }
    return <>
        <div className="bg-[#f5f5f5]">
            <div className="container flex flex-wrap lg:flex-nowrap lg:items-center gap-10 justify-between ">
                <div className="lg:w-2/3  lg:ps-10 flex flex-col gap-5 text-center lg:text-left">
                    <h1 className='text-4xl lg:text-6xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>{data.headline}</h1>
                    <p className='lg:text-2xl  font-medium leading-9 text-darkText text-opacity-80 lg:pe-16'>{data.description} </p>
                </div>
                <div className="lg:w-1/3  overflow-hidden">
                    <img src={data.img} className='rounded-b-xl h-full' alt={data.headline} />
                </div>
            </div>
        </div>
    </>
}

export function Events({ data: Events }) {


    return <>

        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Upcoming events</h2>
                <NavLink to={"/webinars/all-events"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 h-full">
                {Events?.slice(0, 3).map((i, index) => (<>
                    <WebinarsCard webinar={i} category={'events'} />
                </>))}
            </div>
        </div>
    </>
}

export function Videos({ data: Events }) {


    return <>

        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>On demand-videos </h2>
                <NavLink to={"/webinars/all-videos"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 h-full">
                {Events?.slice(0, 3).map((i, index) => (<>
                    <WebinarsCard webinar={i} category={'videos'} />
                </>))}
            </div>
        </div>
    </>
}




export default function Webinars() {

    const { data: webnairsevents, isLoading: eventsloading, isError: iseventserror, error: eventserror } = useQuery({
        queryKey: 'webnairsevents',
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/webinars/events')
        }
    })

    const { data: webnairsvideos, isLoading: videosloading, isError: isvideoserror, error: videoserror } = useQuery({
        queryKey: 'webnairsvideos',
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/webinars/videos')
        }
    })


    return (
        <>
            <HeroSection />
            <Events key={webnairsevents?.data?.data} data={webnairsevents?.data?.data} />
            <Videos key={webnairsvideos?.data?.data} data={webnairsvideos?.data?.data} />
            <ReadyToTransform />
        </>
    )
}
