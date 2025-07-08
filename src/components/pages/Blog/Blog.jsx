import React from 'react'
import heroImg from '../../../assets/images/blog/Frame39735.png'
import postimg from '../../../assets/images/blog/card123.png'
import LearnMore from '../../Buttons/LearnMore'
import axios from 'axios'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'

export function HeroSection() {
    const headline = 'Experience how simple real estate management can be'
    const description = 'Discover how Propxpro advanced AI features transform your business—enhancing your efficiency and confidence with every task.'
    const type = 'insights'
    const date = 'May 10, 2023'

    const data = {
        img: heroImg,
        headline,
        description,
        type,
        date
    }
    return <>
        <div className="container flex flex-wrap lg:flex-nowrap gap-10 justify-between ">
            <div className="lg:w-1/2  overflow-hidden">
                <img src={data.img} className='rounded-b-xl h-full' alt={data.headline} />
            </div>
            <div className="lg:w-3/5  lg:ps-10 flex flex-col gap-5 text-center lg:text-left">
                <div className="flex gap-2 items-center font-bold">
                    <p className='text-hoverText'>{data.type}</p>
                    <div className="h-full w-[1px] bg-gray-400"></div>
                    <p>{data.date}</p>
                </div>
                <h1 className='text-4xl lg:text-6xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>{data.headline}</h1>
                <p className='lg:text-2xl  font-medium leading-9 text-darkText text-opacity-80 lg:pe-16'>{data.description} </p>
                <LearnMore />
            </div>
        </div>
    </>
}

export function LatestPosts() {

    let { data: integrations, isLoading, isError } = useQuery({
        queryKey: ["integrations"],
        queryFn: () => {
            return axios.get('https://propxpro.run.place/api/integrations')
        }
    })

    const data = [
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
    ]

    return <>

        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Latest posts</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                {data?.slice(0, 3).map((i, index) => (<>
                    <div className="w-full lg:w-[calc(33%-10px)] bg-white rounded-2xl flex flex-col  " data-aos="fade-up" data-aos-offset="200" data-aos-delay={index * 50}>
                        <div className=" rounded-xl h-full">
                            <div className="bg-black rounded-[13px]">
                                <div className="relative bg-white flex flex-col gap-3 h-full border rounded-xl transition-all cursor-pointer hover:-translate-x-1.5 hover:-translate-y-1.5">
                                    <div className="w-full text-hoverText text-2xl">
                                        <img src={i.img} alt={i.title} />
                                    </div>
                                    <div className="flex flex-col gap-3 p-5">
                                        <div className="flex gap-2 items-center font-bold">
                                            <p className='text-hoverText'>{i.type}</p>
                                            <div className="h-5 w-[1px] bg-hoverText"></div>
                                            <p>{i.date}</p>
                                        </div>
                                        <div className="text-sm lg:text-xl font-bold">{i.title}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    </>
}

export function TopGuides() {

    let { data: integrations, isLoading, isError } = useQuery({
        queryKey: ["integrations"],
        queryFn: () => {
            return axios.get('https://propxpro.run.place/api/integrations')
        }
    })

    const data = [
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
        {
            img: postimg,
            type: 'insights',
            date: 'May 10, 2023',
            title: 'The game-changer sales system—expertly designed to simplify every step of your real estate success!',
        },
    ]

    return <>
        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Top guides</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                {data?.slice(0, 3).map((i, index) => (<>
                    <div className="w-full lg:w-[calc(33%-10px)] bg-white rounded-2xl flex flex-col  " data-aos="fade-up" data-aos-offset="200" data-aos-delay={index * 50}>
                        <div className=" rounded-xl h-full">
                            <div className="bg-black rounded-[13px]">
                                <div className="relative bg-white flex flex-col gap-3 h-full border rounded-xl transition-all cursor-pointer hover:-translate-x-1.5 hover:-translate-y-1.5">
                                    <div className="w-full text-hoverText text-2xl">
                                        <img src={i.img} alt={i.title} />
                                    </div>
                                    <div className="flex flex-col gap-3 p-5">
                                        <div className="flex gap-2 items-center font-bold">
                                            <p className='text-hoverText'>{i.type}</p>
                                            <div className="h-5 w-[1px] bg-hoverText"></div>
                                            <p>{i.date}</p>
                                        </div>
                                        <div className="text-sm lg:text-xl font-bold">{i.title}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    </>
}

export default function Blog() {


    return (
        <>
            <HeroSection />
            <LatestPosts />
            <TopGuides />
        </>
    )
}
