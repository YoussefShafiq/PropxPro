import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAOSObserver } from '../../hooks/useAOSObserver';
import GetStarted from '../Buttons/GetStarted';
import { IoCheckmark } from 'react-icons/io5';
import { HiXMark } from 'react-icons/hi2';
import agentimg from '../../assets/images/pricing/Ellipse438.png'
import Quoteimage from '../../assets/images/pricing/Quoteimage.png'
import ReadyToTransform from './ReusableSections/ReadyToTransform';

export function HeroSection() {
    return <>
        <div className="bg-[#fff5c0] py-10 text-darkText">
            <div className="container flex flex-col gap-10 items-center" >
                <div className="text-center text-4xl lg:text-6xl leading-[133%] font-extrabold lg:px-24">Every plan is a step towards your real estate excellence</div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-opacity-80 lg:px-80">Choose your perfect plan and begin converting opportunities into closed deals now!
                </div>
            </div>
        </div>
    </>
}

export function PlansCards({ plans, isAnnual, setIsAnnual }) {

    return <>
        <div className="container flex flex-col gap-3 lg:gap-10 items-center">
            {/* annual toggle */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
                <button onClick={() => setIsAnnual(!isAnnual)} className="flex items-center gap-5 border-2 border-black px-5 py-2 rounded-full relative transition-colors">
                    <div className={`w-16 ${isAnnual ? "text-black" : "text-white"}`}>Monthly</div>
                    <div className={`w-16 ${isAnnual ? "text-white" : "text-black"}`}>Annual</div>
                    <div className={`absolute h-[calc(100%-4px)] w-1/2 -z-10 rounded-full bg-hoverText ease-in-out duration-500 ${isAnnual ? "right-0.5" : "right-[calc(50%-2px)]"}`}></div>
                </button>
                <div className={`${isAnnual ? "bg-[#ffe87a]" : "bg-[#d9d9d9] opacity-60"} p-3 rounded-full transition-all text-black font-medium w-full lg:w-auto text-center`} aos="fade-up">
                    Save up to 33% now 🎉
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 w-full font-medium" aos="fade-up">
                {plans?.map((p) => (<>
                    <div className={`w-full lg:w-[calc(${100 / plans.length})] ${p.isPopular ? 'bg-[#f5f9fe] border-e-8 border-b-8' : 'mt-10'} relative border-2 rounded-xl border-black py-8 px-5 flex flex-col gap-5 cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all`}>
                        <div className="absolute top-3 right-3 bg-hoverText px-2 py-1 text-white rounded-lg border border-black" hidden={!p.isPopular}>Most popular</div>
                        <div className="lg:text-5xl font-medium">${isAnnual ? p.annualPrice : p.monthlyPrice}<span className='text-base'>{isAnnual ? '/year' : '/month'}</span></div>
                        <div className="">
                            <h2>{p.title}</h2>
                            <h1 className='text-2xl font-bold capitalize' >{p.name}</h1>
                        </div>
                        <p>{p.description}</p>
                        {p.isPopular ? <GetStarted className='!w-full' /> : <GetStarted className='!w-full' mode='transparent' />}
                        <div className="flex flex-col gap-2">
                            {Object.values(p.features)
                                .filter(f => f.value !== false && f.type == 'boolean')
                                .map((f) => (
                                    <div key={f.name} className="flex items-center gap-2">
                                        <IoCheckmark />
                                        <span>{f.type === 'boolean' ? f.name : f.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    </>
};

export function PlansTable({ plans, features, additionalUsageCharges, isAnnual, setIsAnnual }) {
    return (
        <div className="lg:container p-3 overflow-x-hidden mb-16">
            <table className="w-full border-collapse">
                <thead >
                    <th></th>
                    {plans?.map((p) => (<>
                        <th>
                            <div className="flex flex-col pb-5 md:items-start text-base items-center">
                                <h3 className={`${p.isPopular ? 'text-hoverText' : ''} capitalize text-xs lg:text-base`}>{p.name}</h3>
                                <div className="text-xs lg:text-3xl font-extrabold text-center md:text-left">{isAnnual ? p.annualPrice : p.monthlyPrice}$<span className='text-xs lg:text-base font-medium block md:inline text-center md:text-left'>{isAnnual ? '/year' : '/month'}</span></div>
                            </div>
                        </th>
                    </>))}
                </thead>
                <tbody >
                    <tr>
                        <td colSpan={plans?.length + 1} className="text-start text-xl lg:text-2xl font-extrabold capitalize px-4 py-3">
                            Features
                        </td>
                    </tr>
                    {features?.map((f, i) => (<>
                        <tr className={`leading-9 ${i % 2 == 0 ? 'bg-[#f5f5f5]' : ''}`}>
                            <td className='py-3 ps-3 text-xs lg:text-base'>{f.name}</td>
                            {plans?.map((p) => (<>
                                <td className='text-black text-xs lg:text-sm text-center lg:text-left'>
                                    {p.features[f.key]?.type == 'boolean' ? p.features[f.key]?.value ? <IoCheckmark className='text-2xl' /> : <HiXMark className='text-red-500 text-2xl' /> : p.features[f.key]?.value}
                                </td>
                            </>))}
                        </tr>
                    </>))}
                    <tr>
                        <td colSpan={plans?.length + 1} className="text-start text-xl lg:text-2xl font-extrabold capitalize px-4 py-3">
                            Additional Usage Charges
                        </td>
                    </tr>
                    {additionalUsageCharges?.map((f, i) => (<>
                        <tr className={`leading-9 ${i % 2 == 0 ? 'bg-[#f5f5f5]' : ''}`}>
                            <td className='py-3 ps-3 text-xs lg:text-base'>{f.name}</td>
                            {plans?.map((p) => (<>
                                <td className='text-black text-xs lg:text-sm'>
                                    {p.additionalUsageCharges[f.key]?.type == 'boolean' ? p.additionalUsageCharges[f.key]?.value ? <IoCheckmark className='text-2xl' /> : <HiXMark className='text-red-500 text-2xl' /> : p.additionalUsageCharges[f.key]?.value}
                                </td>
                            </>))}
                        </tr>
                    </>))}
                </tbody>
            </table>
        </div >
    );
}

export function AgentFeedback() {
    return <>
        <div className=" bg-[#f6f5fe]">
            <div className="container flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-4/5">
                    <p className='text-xl lg:text-4xl font-extrabold leading-9 lg:leading-[50px] text-darkText' >“ The intuitive interface makes it incredibly easy to use, and we've seen a significant boost in tenant satisfaction since we started using it. I can't imagine managing our properties without PropXPro now ”</p>
                </div>
                <div className="lg:w-80 flex flex-col justify-center">
                    <div className="relative flex items-center justify-center w-72 h-72 ">
                        <img src={agentimg} className='w-52' alt="user-friendly dashboard" loading='lazy' />
                        <img src={Quoteimage} className='w-24 absolute top-0 right-0' alt="user-friendly dashboard" loading='lazy' data-aos="zoom-in" />
                    </div>
                    <div className="text-center">
                        <h2 className='text-2xl font-bold'>Michel Johnson</h2>
                        <p className='font-medium'>Property manager</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default function Pricing() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pricing'],
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/plans')
        }
    })




    useAOSObserver()
    const [isAnnual, setIsAnnual] = useState(false);


    return <>
        <HeroSection />
        <PlansCards plans={data?.data?.data?.plans} isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <PlansTable plans={data?.data?.data?.plans} features={data?.data?.data?.features} additionalUsageCharges={data?.data?.data?.additionalUsageCharges} isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <AgentFeedback />
        <ReadyToTransform />
    </>
}
