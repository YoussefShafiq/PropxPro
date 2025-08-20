import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/real-time-com-feature/imagecard8.png'
import unifiedTeamCommunicaiton from '../../../assets/images/real-time-com-feature/Group39991.png'
import phoneNumbers from '../../../assets/images/real-time-com-feature/pic.png'
import advancedCalls from '../../../assets/images/real-time-com-feature/Group39992.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import { RxDashboard } from 'react-icons/rx'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import { LuMessageSquareDot, LuPhoneCall } from 'react-icons/lu'
import { PiListStarLight, PiUsersThree } from 'react-icons/pi'
import { LiaIdCardSolid } from 'react-icons/lia'
import { BiMessageSquareCheck } from 'react-icons/bi'
import { TbMessage } from 'react-icons/tb'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Real-time communication" description="Easily manage your team, handle phone numbers, and streamline calls and messaging—all at your fingertips in one powerful platform." />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container lg:!px-0 flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 bg-[#fefaf5] rounded-xl flex flex-col justify-between lg:pt-14 gap-10 overflow-hidden" >
                    <div className="p-5 lg:px-14">
                        <h2 className="lg:text-3xl font-bold text-darkText ">Unified team communication</h2>
                        <p className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Call and text from one number—ensuring professional, unified team communication always!</p>
                    </div>
                    <div className="lg:pe-14 pe-10 m-0" data-aos="slide-right">
                        <img src={unifiedTeamCommunicaiton} className='w-full' alt="Unified team communication" />
                    </div>
                </div>
                <div className="lg:w-1/2 bg-[#f6f5fe] rounded-xl flex flex-col justify-between lg:pt-14 gap-10 overflow-hidden"  >
                    <div className="p-5 lg:px-14 ">
                        <h2 className="lg:text-3xl font-bold text-darkText ">Phone numbers </h2>
                        <p className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Get your ideal business number—manage multiple lines, and adjust team size easily!</p>
                    </div>
                    <div className="lg:ps-20 ps-10 m-0" data-aos="slide-left">
                        <img src={phoneNumbers} className='w-full' alt="Phone numbers " />
                    </div>
                </div>
            </div>

            <div className="bg-[#fef5f5] rounded-xl flex flex-col lg:pt-14 p-5 pb-0 lg:px-14 gap-10 overflow-hidden" >
                <div className="lg:w-5/6">
                    <h2 className="lg:text-3xl font-bold text-darkText ">Advanced calls and messaging</h2>
                    <p className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Engage your team with group calls, instant messaging, file sharing, and AI-driven call summaries—never miss a detail!</p>
                </div>
                <div className="m-auto w-full" data-aos="slide-up" >
                    <img src={advancedCalls} className='w-full' alt="Advanced calls and messaging" />
                </div>
            </div>
        </div>
    </>
}

export function LeadSuccessSimplified() {
    const items = [
        {
            id: 1,
            icon: <BiMessageSquareCheck />,
            title: "Team up—Connect instantly",
            description: "Message as one—everyone can text a contact together for unified, powerful communication. Never miss a chance to connect better!"
        },
        {
            id: 2,
            icon: <LuPhoneCall />,
            title: "Flexible phone numbers",
            description: "Get your ideal number instantly—local, US, Canadian, or toll-free—start calling with confidence!"
        },
        {
            id: 3,
            icon: <TbMessage />,
            title: "Quick client chats",
            description: "Connect instantly with clients from opportunity details for fast, efficient communication."
        },
        {
            id: 4,
            icon: <PiListStarLight />,
            title: "Upgrade your messaging",
            description: "PropXPro AI transforms your communication with professional rephrasing, making every message clear and effective."
        }
    ]

    return <FeatureBenefits items={items} title="Power up your communication" />

}
export default function RealtimeCommunication() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures CurrentFeatureId={8} />
        <ReadyToTransform />
    </>
}
