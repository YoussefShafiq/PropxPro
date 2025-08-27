import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/activity-tracking-feature/imagecard6.png'
import engageAndInspire from '../../../assets/images/activity-tracking-feature/Table3.png'
import activityLogs from '../../../assets/images/activity-tracking-feature/Frame396971.png'
import actionableInsights from '../../../assets/images/activity-tracking-feature/Group39722.png'
import realtimeNotifications from '../../../assets/images/activity-tracking-feature/Frame3969931.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import { IoLayersOutline } from 'react-icons/io5'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import { BsFileEarmarkText } from 'react-icons/bs'
import { CiCompass1 } from 'react-icons/ci'
import { LuMessageSquareDot } from 'react-icons/lu'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Activity tracking" description="From opportunity creation to task completion, stay informed about every action—understand trends, refine strategies, and scale your business to new heights." />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fefaf5] rounded-xl flex flex-col gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl text-xl font-bold leading-[100%]'>Engage and inspire</h2>
                        <p className='text-md lg:text-xl font-medium lg:leading-9 text-opacity-80'>Keep everyone informed with detailed activity logs and real-time updates—Feel the difference!</p>
                    </div>
                    <div className="lg:pe-24 pe-10" data-aos="slide-right" data-aos-offset="200">
                        <img src={engageAndInspire} alt="Engage and inspire" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#f6f5fe] rounded-xl flex flex-col justify-between gap-5 pb-0 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl text-xl font-bold leading-[100%]'>Comprehensive activity Logs</h2>
                        <p className='text-md lg:text-xl font-medium lg:leading-9 text-opacity-80'>Track every step from opportunity creation to task completion—See who did what and when, with clear, detailed entries.</p>
                    </div>
                    <div className="lg:ps-12 ps-10" data-aos="slide-left" data-aos-offset="200">
                        <img src={activityLogs} alt="Comprehensive activity Logs" />
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fef5f5] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl text-xl font-bold leading-[100%]'>Actionable insights</h2>
                        <p className='text-md lg:text-xl font-medium lg:leading-9 text-opacity-80'>Analyze trends and patterns to refine your strategies and boost your success. Stay proactive with data-driven decisions.</p>
                    </div>
                    <div className="lg:px-24 px-10" data-aos="slide-right" data-aos-offset="200">
                        <img src={actionableInsights} alt="Actionable insights" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#eff9f2] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl text-xl font-bold leading-[100%]'>Real-time notifications</h2>
                        <p className='text-md lg:text-xl font-medium lg:leading-9 text-opacity-80'>Stay updated with real-time notifications. Never miss a crucial action or deadline—stay informed and ahead.</p>
                    </div>
                    <div className="lg:px-20 px-10" data-aos="slide-left" data-aos-offset="200">
                        <img src={realtimeNotifications} alt="Real-time notifications" />
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
            icon: <IoLayersOutline />,
            title: "Clear operation overview",
            description: "View all your actions in one place. Understand the workflow and ensure nothing slips through the cracks."
        },
        {
            id: 2,
            icon: <BsFileEarmarkText />,
            title: "Detailed descriptions",
            description: "Each activity is logged with specific details—who, what, where, and when—giving you a complete picture of your operations."
        },
        {
            id: 3,
            icon: <CiCompass1 />,
            title: "Perfect tracking for you",
            description: "Customize your tracking to fit your needs. Focus on the metrics that matter most to your business."
        },
        {
            id: 4,
            icon: <LuMessageSquareDot />,
            title: "Real-time updates",
            description: "Receive instant notifications and updates. Stay informed and make timely decisions based on the most current information."
        }
    ]

    return <FeatureBenefits items={items} title="Maximize your tracking power" />

}
export default function ActivityTracking() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures CurrentFeatureId={6} />
        <ReadyToTransform />
    </>
}
