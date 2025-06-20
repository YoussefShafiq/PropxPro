import React from 'react'
import heroImg from '../../../assets/images/action-assign-feature/imagecard7.png'
import optimizeTeamPotential from '../../../assets/images/action-assign-feature/Group39991.png'
import smartTaskDistribution from '../../../assets/images/action-assign-feature/Frame397001.png'
import roleBasedAssignment from '../../../assets/images/action-assign-feature/Frame39700.png'
import taskTracking1 from '../../../assets/images/action-assign-feature/Actions1.png'
import taskTracking2 from '../../../assets/images/action-assign-feature/Actions2.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import { IoAnalyticsSharp, IoLayersOutline } from 'react-icons/io5'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import { BsFileEarmarkText } from 'react-icons/bs'
import { CiCompass1 } from 'react-icons/ci'
import { LuMessageSquareDot } from 'react-icons/lu'
import { AiOutlineLike } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Action assignment" description="Assign tasks by expertise with PropXPro's smart task system—perfectly balanced workloads for effective lead management." />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fefaf5] rounded-xl flex flex-col gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Optimize your team potential</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Efficiently distribute tasks to the right team members—PropXPro ensures every action is handled by the best fit!</p>
                    </div>
                    <div className="pe-36 ps-20" data-aos="slide-right" data-aos-offset="200">
                        <img src={optimizeTeamPotential} alt="Optimize your team potential" loading='lazy' />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#f6f5fe] rounded-xl flex flex-col justify-between gap-5 pb-0 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Smart task distribution</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'> PropXPro's round-robin system evenly assigns tasks, ensuring no team member is overheaded—Experience productivity like never before! </p>
                    </div>
                    <div className="ps-12" data-aos="slide-left" data-aos-offset="200">
                        <img src={smartTaskDistribution} loading='lazy' alt="Smart task distribution" />
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fef5f5] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Role-based assignments</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Assign tasks based on each member’s strengths and expertise. Maximize your team's potential!</p>
                    </div>
                    <div className="px-28" data-aos="slide-right" data-aos-offset="200">
                        <img src={roleBasedAssignment} alt="Role-based assignments" loading='lazy' />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#eff9f2] rounded-xl flex flex-col gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Detailed task tracking</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Monitor all assigned tasks and their progress in real-time. Stay on top of every lead!</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="" data-aos="slide-left" >
                            <img src={taskTracking1} loading='lazy' alt="Detailed task tracking" />
                        </div>
                        <div className="" data-aos="slide-right" >
                            <img src={taskTracking2} loading='lazy' alt="Detailed task tracking" />
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
            icon: <AiOutlineLike />,
            title: "Balanced workloads",
            description: "PropXPro’s system balances workloads, making sure every task is efficiently managed and executed."
        },
        {
            id: 2,
            icon: <FaTasks />,
            title: "Expert task allocation",
            description: "Assign tasks to those best suited for them, ensuring high-quality outcomes and improved efficiency."
        },
        {
            id: 3,
            icon: <IoAnalyticsSharp />,
            title: "Comprehensive task overview",
            description: "Track tasks, assignments, and progress with ease. Keep your team organized and productive."
        },
        {
            id: 4,
            icon: <TbMessages />,
            title: "Enhanced collaboration",
            description: "Integration with communication tools keeps your team connected and informed at all times."
        }
    ]

    return <FeatureBenefits items={items} title="Optimize your team's productivity " />

}
export default function ActionAssignment() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures />
        <ReadyToTransform />
    </>
}
