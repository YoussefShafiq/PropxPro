import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/lead-management-feature/imagecard2.png'
import lead from '../../../assets/images/lead-management-feature/lead.png'
import centralizedDBImg1 from '../../../assets/images/lead-management-feature/Group-39639.png'
import centralizedDBImg2 from '../../../assets/images/lead-management-feature/Group-39643.png'
import smartAssignments from '../../../assets/images/lead-management-feature/Group-39991.png'
import realtimeTracking1 from '../../../assets/images/lead-management-feature/Group-3081.png'
import realtimeTracking2 from '../../../assets/images/lead-management-feature/Group-39897.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { FiWifi } from 'react-icons/fi'
import { PiTagSimpleLight } from 'react-icons/pi'
import { CiFilter } from 'react-icons/ci'
import { LuMessageSquareMore } from 'react-icons/lu'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import FeatureBenefits from './FeatureBenefits'


export function HeroSection() {
    return <>
        <div className="container !pt-0 flex flex-wrap lg:flex-nowrap gap-5 justify-between items-center">
            <div className="lg:w-3/5 py-8 flex flex-col gap-5 text-center lg:text-left">
                <h1 className='text-4xl lg:text-7xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Lead management
                    system </h1>
                <p className='lg:text-2xl  font-medium leading-9 text-darkText text-opacity-80 lg:pe-16'>Get all your leads in one place with—Easily assign and manage them for maximum productivity and success!
                </p>
                <GetStarted />
            </div>
            <div className="lg:w-1/2 lg:ps-16 rounded-xl overflow-hidden">
                <img src={heroImg} className=' h-full' alt="User Friendly Dashboard" />
            </div>
        </div>
    </>
}

export function SubFeatures() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fefaf5] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='text-3xl font-bold leading-[100%]'>Lead your team</h2>
                        <p className='text-xl font-medium leading-9 text-opacity-80'>Assign leads with ease, keeping everyone on track and productive!</p>
                    </div>
                    <div className="ps-10" data-aos="slide-left" data-aos-offset="200">
                        <img src={lead} alt="Lead your team" loading='lazy' />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#f6f5fe] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='text-3xl font-bold leading-[100%]'>Centralized database</h2>
                        <p className='text-xl font-medium leading-9 text-opacity-80'>Access and manage all your leads from one place, regardless of the source!</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="ps-28" data-aos="slide-left" data-aos-offset="200">
                            <img src={centralizedDBImg1} loading='lazy' alt="Centralized database" />
                        </div>
                        <div className="pe-28" data-aos="slide-right" data-aos-offset="200">
                            <img src={centralizedDBImg2} loading='lazy' alt="Centralized database" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fef5f5] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='text-3xl font-bold leading-[100%]'>Smart assignments</h2>
                        <p className='text-xl font-medium leading-9 text-opacity-80'>Assign leads using round-robin, individual, or campaign strategies for fair distribution and efficient follow-up!

                        </p>
                    </div>
                    <div className="ps-10" data-aos="slide-left" data-aos-offset="200">
                        <img src={smartAssignments} alt="Smart assignments" loading='lazy' />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#eff9f2] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='text-3xl font-bold leading-[100%]'>Real-time tracking</h2>
                        <p className='text-xl font-medium leading-9 text-opacity-80'>Track lead progress in real-time, from first contact to closing deals!</p>
                    </div>
                    <div className="flex flex-col -space-y-5">
                        <div className="ps-28" data-aos="slide-left" data-aos-offset="200">
                            <img src={realtimeTracking1} loading='lazy' alt="Real-time tracking" />
                        </div>
                        <div className="pe-16" data-aos="slide-right" data-aos-offset="200">
                            <img src={realtimeTracking2} loading='lazy' alt="Real-time tracking" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function LeadSuccessSimplified() {
    const items = [
        {
            id: 1,
            icon: <FiWifi />,
            title: "Detailed tracking",
            description: "Track your leads with precision, ensuring every opportunity is maximized and nothing slips through cracks."
        },
        {
            id: 2,
            icon: <PiTagSimpleLight />,
            title: " Effective follow-up",
            description: "Automate follow-up tasks to keep your leads engaged—ensuring smooth movement through the pipeline!"
        },
        {
            id: 3,
            icon: <CiFilter />,
            title: "Streamlined lead management",
            description: "Effortlessly assign leads to your team, ensuring that every member stays on track and maximizes productivity."
        },
        {
            id: 4,
            icon: <LuMessageSquareMore />,
            title: "Easy communication",
            description: "Connect instantly with team members and contacts through real-time messaging and calls, ensuring timely lead management."
        }
    ]
    return <FeatureBenefits items={items} title="Lead success simplified" />
}

export default function LeadManagement() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures />
        <ReadyToTransform />
    </>
}
