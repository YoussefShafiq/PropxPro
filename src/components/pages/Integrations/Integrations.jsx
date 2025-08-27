import React, { useState } from 'react'
import heroImg from '../../../assets/images/integration/imagecard9.png'
import zapierlogo from '../../../assets/images/integration/zapierlogo.png'
import highlight from '../../../assets/images/integration/Highlight_05.png'
import Frame39772 from '../../../assets/images/integration/Frame39772.png'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import LearnMore from '../../Buttons/LearnMore'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Integrations" description="Connect your favourite platforms with PropXPro for instant lead generation and actionable insights—transform your workflow!" />
    </>
}

export function Applications() {




    let { data: integrations, isLoading, isError } = useQuery({
        queryKey: ["integrations"],
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/integrations')
        }
    })

    return <>
        <div className="bg-[#f6f6f9]">
            <div className="container flex flex-col gap-5">
                <div className="flex justify-between">
                    <h2 className='font-bold text-2xl lg:text-3xl'>Applications</h2>
                    <NavLink to={"/integrations/all-integrations"} className="flex gap-2 items-center font-bold text-sm">
                        View all <IoIosArrowRoundForward />
                    </NavLink>
                </div>
                <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                    {(integrations?.data?.data?.length == 0) && <div className='text-center w-full'>No Integrations found</div>}
                    {isLoading ?
                        <>
                            <div className="flex flex-row lg:flex-col gap-5 w-full">
                                {[...Array(3)].map((i) => (<>
                                    <div className="w-full lg:w-1/3 h-96 bg-gray-200 animate-pulse rounded-xl"></div>
                                </>))}
                            </div>
                        </>
                        :
                        integrations?.data?.data?.slice(0, 6).map((i) => (<>
                            <div className="w-full lg:w-[calc(33%-10px)] bg-white rounded-2xl flex flex-col box-border border ">
                                <div className="border rounded-xl h-full">
                                    <div className="bg-white p-5 flex flex-col h-full border border-transparent box-border rounded-xl border-e-4 border-b-4 border-t-1 border-s-1 hover:border-black  transition-all cursor-pointer">
                                        <div className="w-24 lg:w-16 text-hoverText text-2xl">
                                            <img src={i.logo_url} alt={i.name} />
                                        </div>
                                        <div className="text-sm lg:text-xl font-bold">{i.name}</div>
                                        <div className="text-base font-medium mt-2">
                                            {i.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>))
                    }

                </div>
            </div>
        </div >
    </>
}

export function Zapier() {
    return <>
        <div className='lg:bg-zapier text-white bg-cover bg-darkBlue bg-center py-20'>
            <div className="container">
                <div className=" lg:w-1/2 flex flex-col gap-8">
                    <div className="relative w-[calc(100%-32px)]">
                        <img src={zapierlogo} className='w-full' alt="zapierlogo" />
                        <div className="absolute top-0 right-0 translate-x-full -translate-y-full w-fit h-fit">
                            <img src={highlight} className='lg:w-fit w-10' alt="zapierlogo" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 lg:ps-28 text-center lg:text-left">
                        <p className='lg:text-2xl font-medium lg:leading-9'>Connect PropXPro to Zapier and instantly tap into over 7,000 apps. Integrate your favourite tools with ease and transform your workflow today!
                        </p>
                        <LearnMore />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function InstantLeadGeneration() {

    const [selectedBenifit, setselectedBenifit] = useState(0)

    const integrationBenifits = [
        {
            title: 'Smart data integration',
            desc: 'Automatically sync and update data across your integrated apps, ensuring your team always has the latest information.'
        },
        {
            title: 'Instant lead generation',
            desc: 'Connect your PropXPro account with leading lead generation platforms to instantly capture and manage high-quality leads in real-time.'
        },
        {
            title: 'Extensive app support',
            desc: 'PropXPro supports a wide range of applications, ensuring you can effortlessly connect all your favourite tools for enhanced productivity.'
        }
    ]

    return <>
        <div className="bg-[#ffeacb]">
            <div className="container flex flex-col lg:flex-row justify-center gap-5">
                <div className="lg:w-1/2 py-8 flex flex-col gap-5 lg:gap-8 text-left">
                    <h1 className='text-3xl lg:text-5xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>{integrationBenifits[selectedBenifit].title}</h1>
                    <p className='lg:text-2xl  font-medium lg:leading-9 text-darkText text-opacity-80 lg:pe-16'>{integrationBenifits[selectedBenifit].desc}</p>
                    <div className="flex gap-5 items-center text-2xl">
                        <div className="bg-black rounded-xl relative w-14 lg:w-16 aspect-square">
                            <button className="w-14 lg:w-16 aspect-square bg-white rounded-xl border-2 border-black flex justify-center items-center absolute bottom-0 right-0 hover:bottom-1 hover:right-1 transition-all duration-300" onClick={() => setselectedBenifit((selectedBenifit - 1 + integrationBenifits.length) % integrationBenifits.length)} >
                                <IoIosArrowBack />
                            </button>
                        </div>
                        <div className="bg-black rounded-xl relative w-14 lg:w-16 aspect-square">
                            <button className="w-14 lg:w-16 aspect-square bg-white rounded-xl border-2 border-black flex justify-center items-center absolute bottom-0 right-0 hover:bottom-1 hover:right-1 transition-all duration-300" onClick={() => setselectedBenifit((selectedBenifit + 1) % integrationBenifits.length)}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-xl overflow-hidden flex justify-center items-end">
                    <img src={Frame39772} alt="Close more deals with confidence" className='w-4/5' />
                </div>
            </div>
        </div>
    </>
}


export default function Integrations() {
    return <>
        <HeroSection />
        <Applications />
        <Zapier />
        <InstantLeadGeneration />
        <DiscoverFeatures />
        <ReadyToTransform />
    </>
}
