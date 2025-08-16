import React from 'react'
import { useAOSObserver } from '../../../hooks/useAOSObserver';
import GetStarted from '../../Buttons/GetStarted';
import heroImg from '../../../assets/images/user-friendly-dahsboard-feature/imgcard1.png';
import trendTracker from '../../../assets/images/user-friendly-dahsboard-feature/trend-tracker.png';
import teamsDashboard from '../../../assets/images/user-friendly-dahsboard-feature/teams-dashboard.png';
import statistics from '../../../assets/images/user-friendly-dahsboard-feature/statistics.png';
import activityTracking from '../../../assets/images/user-friendly-dahsboard-feature/activity-tracking.png';
import assignTasks from '../../../assets/images/user-friendly-dahsboard-feature/assign-tasks.png';
import twilio from '../../../assets/images/user-friendly-dahsboard-feature/twilio.png';
import chatTeamsManagement from '../../../assets/images/user-friendly-dahsboard-feature//chat-teams-management.png';
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures';
import { FiWifi } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { RxDashboard } from 'react-icons/rx';
import { LuMessageSquareMore } from 'react-icons/lu';
import ReadyToTransform from '../ReusableSections/ReadyToTransform';
import FeatureBenefits from '../ReusableSections/FeatureBenefits';
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'

export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="User-friendly dashbaord" description="Get all your KPIs at a glance—track weekly, monthly, and yearly opportunities. Make confident, winning decisions and more!" />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container lg:!px-0 flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 bg-[#fefaf5] rounded-xl flex flex-col justify-between lg:pt-14  gap-10 overflow-hidden" >
                    <div className="p-5 lg:px-14">
                        <div className="lg:text-3xl font-bold text-darkText ">Engage with your data</div>
                        <div className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Welcome to the heart of all your real estate operations!
                            View all your performance metrics at a glance—every decision you make with propXpro is informed, strategic, and impactful.
                        </div>
                    </div>
                    <div className=" flex justify-center m-0" data-aos="slide-right">
                        <img loading='lazy' src={teamsDashboard} className='w-4/5' alt="teams chat" loading='lazy' />
                    </div>
                </div>
                <div className="lg:w-1/2 bg-[#f6f5fe] rounded-xl flex flex-col justify-between lg:pt-14 gap-10 overflow-hidden"  >
                    <div className="p-5 lg:px-14 ">
                        <div className="lg:text-3xl font-bold text-darkText ">Opportunities — Trent Tracker</div>
                        <div className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Track leads with vibrant visuals. Switch between weekly, monthly, or yearly views—spot trends and make smart decisions every time!</div>
                    </div>
                    <div className="ps-14 m-0" data-aos="slide-left">
                        <img loading='lazy' src={trendTracker} className='w-full' alt="phone numbers" loading='lazy' />
                    </div>
                </div>
            </div>

            <div className="bg-[#fef5f5] rounded-xl flex flex-col lg:pt-14 p-5 pb-0 lg:px-14 gap-10 overflow-hidden" >
                <div className="lg:w-5/6">
                    <div className="lg:text-3xl font-bold text-darkText ">Statistics metrics—Your performance boosters</div>
                    <div className="text-sm lg:text-xl text-grayText font-medium mt-3 ">Track your victories with Propxpro for unstoppable growth!
                    </div>
                </div>
                <div className="m-auto w-full" data-aos="slide-up" >
                    <img loading='lazy' src={statistics} className='w-full' alt="calling and messaging" loading='lazy' />
                </div>
            </div>

        </div>
    </>
}

export function ActivityTracking() {
    return <>
        <div className="container flex lg:flex-row flex-col gap-5 w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 lg:pe-16">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Activity tracking </div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">Monitor each move with precision—Check descriptions, locations, and timings for every action taken and more!
                </div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img loading='lazy' src={activityTracking} alt="user-friendly dashboard" className='w-full' loading='lazy' />
            </div>
        </div>
    </>
}

export function AssignTask() {
    return <>
        <div className="container flex lg:flex-row-reverse flex-col gap-5 lg:gap-32 w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 ">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Assign tasks</div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">Organize tasks effortlessly with Assignments Tab—instantly assign opportunities to the right team members with ease!
                </div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img loading='lazy' src={assignTasks} alt="user-friendly dashboard" className='w-full' loading='lazy' />
            </div>
        </div>
    </>
}

export function TwilioIntegration() {
    return <>
        <div className="container flex lg:flex-row flex-col gap-5 w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 lg:pe-16">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Twilio integration </div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">Connect with Twilio now for quick, effective CRM messaging—Enhance your client interactions instantly!

                </div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img loading='lazy' src={twilio} alt="user-friendly dashboard" className='w-full' loading='lazy' />
            </div>
        </div>
    </>
}

export function ChatTeamsManagement() {
    return <>
        <div className="container flex lg:flex-row-reverse flex-col gap-5 lg:gap-32 w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 ">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Chat teams management</div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">Efficiently coordinate your chat teams with streamlined management tools, ensuring seamless communication and collaboration
                </div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img loading='lazy' src={chatTeamsManagement} alt="user-friendly dashboard" className='w-full' loading='lazy' />
            </div>
        </div>
    </>
}

export function OptimizedBusinessManagement() {
    const items = [
        {
            id: 1,
            icon: <FiWifi />,
            title: "Track everything",
            description: "Adjust metrics and set timeframes to get precise insights instantly—Make confident decisions every time!"
        },
        {
            id: 2,
            icon: <ImStatsDots />,
            title: "Engage with data ",
            description: "Hover over data points for detailed insights—Stay on top with real-time info for your real estate business."
        },
        {
            id: 3,
            icon: <RxDashboard />,
            title: "Efficient management",
            description: "Track Every Detail—Use Activities and Assignments tabs to ensure nothing slips through the cracks."
        },
        {
            id: 4,
            icon: <LuMessageSquareMore />,
            title: "Communicate easily",
            description: "Connect with Twilio for direct messaging from your CRM, keeping interactions organized in one place."
        }
    ]

    return <FeatureBenefits items={items} title="Optimized business management" />
}

export default function Dashbaord() {
    useAOSObserver();
    return <>
        <HeroSection />
        <SubFeatures />
        <ActivityTracking />
        <AssignTask />
        <TwilioIntegration />
        <ChatTeamsManagement />
        <OptimizedBusinessManagement />
        <DiscoverFeatures />
        <ReadyToTransform />
    </>
}
