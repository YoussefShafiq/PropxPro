import React, { useEffect } from 'react'
import heroImg from '../../../assets/images/blog/Frame39735.png'
import postimg from '../../../assets/images/blog/card123.png'
import startUp from '../../../assets/images/blog/startup.png'
import topTrendingImg from '../../../assets/images/blog/Group39759.png'
import topic1 from '../../../assets/images/blog/topic1.png'
import topic2 from '../../../assets/images/blog/topic2.png'
import LearnMore from '../../Buttons/LearnMore'
import axios from 'axios'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import StayConnected from '../ReusableSections/StayConnected'
import BlogCard from './BlogCard'

export function HeroSection({ data: heroBlog }) {
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
                <img loading='lazy' src={data.img} className='rounded-b-xl h-full' alt={data.headline} />
            </div>
            <div className="lg:w-3/5  lg:ps-10 flex flex-col gap-5 text-center lg:text-left">
                {/* <div className="flex gap-2 items-center font-bold">
                    <p className='text-hoverText'>{heroBlog.category}</p>
                    <div className="h-full w-[1px] bg-gray-400"></div>
                    <p>{heroBlog.updated_at.substring(0, 10)}</p>
                </div> */}
                <h1 className='text-4xl lg:text-6xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>{data.headline}</h1>
                <p className='lg:text-2xl  font-medium leading-9 text-darkText text-opacity-80 lg:pe-16'>{data.description} </p>
                <LearnMore />
            </div>
        </div>
    </>
}

export function LatestPosts({ data: latestPosts, isLoading }) {


    return <>

        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Latest posts</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 h-full">
                {(latestPosts?.length == 0) && <div className='text-center w-full'>No posts found</div>}
                {isLoading ?
                    <>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            {[...Array(3)].map((i) => (<>
                                <div className="w-full lg:w-1/3 h-72 lg:h-96 bg-gray-100 animate-pulse rounded-xl"></div>
                            </>))}
                        </div>
                    </>
                    :
                    latestPosts?.slice(0, 3).map((i, index) => (<>
                        <BlogCard blog={i} />
                    </>))
                }
            </div>
        </div>
    </>
}

export function PowerUpYourProductivity() {
    return <>
        <div className="bg-[#fefaf5]">
            <div className="container !p-0 flex flex-wrap lg:flex-nowrap gap-5 justify-between items-center">
                <div className="lg:w-3/5 py-8 flex flex-col gap-5 text-left">
                    <h1 className='text-4xl lg:text-6xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Power up your productivity</h1>
                    <p className='lg:text-2xl  font-medium leading-9 text-darkText text-opacity-80 lg:pe-16'>Maximize your efficiency with PropXpro—Discover our expert tips to simplify operations, automate workflows, and secure more deals with ease and confidence.
                    </p>
                    <div className="flex items-center gap-2 font-bold">
                        <Link to="/blog/all-posts">Browse top posts</Link>
                        <FaArrowRight />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:ms-16 overflow-hidden flex justify-center items-center p-20 bg-[#ffd7c0] ">
                    <img loading='lazy' src={startUp} className='rounded-b-xl h-1/2' alt='Power up your productivity' />
                </div>
            </div>
        </div>
    </>
}

export function TopGuides({ data: TopGuides, isLoading }) {

    return <>

        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Top guides</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                {(TopGuides?.length == 0) && <div className='text-center w-full'>No guides found</div>}
                {isLoading ?
                    <>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            {[...Array(3)].map((i) => (<>
                                <div className="w-full lg:w-1/3 h-72 lg:h-96 bg-gray-100 animate-pulse rounded-xl"></div>
                            </>))}
                        </div>
                    </>
                    :
                    TopGuides?.slice(0, 3).map((i, index) => (<>
                        <BlogCard blog={i} />
                    </>))
                }
            </div>
        </div>
    </>
}

export function TrendingTopics({ data: TrendingTopics }) {

    const navigate = useNavigate()

    return <>
        <div className="bg-[#f5f9fe]">
            <div className="container !p-0 flex flex-wrap lg:flex-nowrap gap-5 justify-between ">
                <div className="lg:w-3/5 py-16 flex flex-col gap-5 text-left">
                    <h2 className='font-bold text-2xl lg:text-3xl'>Trending topics</h2>
                    {TrendingTopics?.slice(0, 2).map((t, i) => (<>
                        <div className="flex gap-5 font-bold">
                            <div className="lg:w-1/2  overflow-hidden">
                                <img loading='lazy' src={t.cover_photo_url} className='rounded-xl w-full h-40 object-cover' alt={t.title} />
                            </div>
                            <div className="lg:w-3/5 flex flex-col gap-2 text-left">
                                <div className="flex gap-2 text-xs">
                                    <p className='text-hoverText'>{t.category}</p>
                                    <div className="h-full w-[1px] bg-gray-400"></div>
                                    <p>{t.updated_at.substring(0, 10)}</p>
                                </div>
                                <h1 className=' font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue' onClick={() => navigate(`/blog/post/${t.id}`)}>{t.title}</h1>
                            </div>
                        </div>
                    </>))}
                </div>
                <div className="lg:w-1/2 lg:ms-16 overflow-hidden flex justify-center items-end p-20 pb-0 bg-[#c0ddff] ">
                    <img loading='lazy' src={topTrendingImg} className='rounded-b-xl w-full' alt='Power up your productivity' />
                </div>
            </div>
        </div>
    </>
}


export default function Blog() {

    const { data: blogs, isLoading, isError, error } = useQuery({
        queryKey: 'blogs',
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/landing/blogs')
        }
    })


    return (
        <>
            <HeroSection key={blogs?.data?.data?.hero} data={blogs?.data?.data?.hero} />
            <LatestPosts key={blogs?.data?.data?.latest} data={blogs?.data?.data?.latest} isLoading={isLoading} />
            <PowerUpYourProductivity />
            <TopGuides key={blogs?.data?.data?.guides} data={blogs?.data?.data?.guides} isLoading={isLoading} />
            <TrendingTopics key={blogs?.data?.data?.trending} data={blogs?.data?.data?.trending} />
            <StayConnected />
            <ReadyToTransform />
        </>
    )
}
