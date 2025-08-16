import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/campaigns-and-opp-feature/imagecard4.png'
import campaigns from '../../../assets/images/campaigns-and-opp-feature/campaigns.png'
import performance from '../../../assets/images/campaigns-and-opp-feature/Group39898.png'
import opportunitiesManagement from '../../../assets/images/campaigns-and-opp-feature/Group39897.png'
import opportunitiesInsights from '../../../assets/images/campaigns-and-opp-feature/Opportunitiesinfo.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import { IoStatsChart } from 'react-icons/io5'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import { BiTimer } from 'react-icons/bi'
import { MdOutlineInsights } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Campaigns & opportunities" description="Streamline your efforts, optimize your strategies, and improve your results with our campaign and opportunity management tools." />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fefaf5] rounded-xl flex flex-col gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Streamline your efforts</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Manage, track, and improve every aspect of all your active campaigns with ease and confidence
                        </p>
                    </div>
                    <div className="pe-20" data-aos="slide-right" data-aos-offset="200">
                        <img src={campaigns} alt="Streamline your efforts" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#f6f5fe] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Explore performance</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Visualize your campaign's growth with our interactive graph—see potential and performance over time!</p>
                    </div>
                    <div className="ps-12" data-aos="slide-left" data-aos-offset="200">
                        <img src={performance} alt="Explore performance" />
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fef5f5] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Opportunities management</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Easily manage and monitor opportunities—Add, view, edit, and progress through various stages from one place</p>
                    </div>
                    <div className="pe-24" data-aos="slide-right" data-aos-offset="200">
                        <img src={opportunitiesManagement} alt="Opportunities management" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#eff9f2] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Opportunity insights</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Access and manage comprehensive opportunity details. Streamline your workflows for successful real estate transactions.</p>
                    </div>
                    <div className="ps-12" data-aos="slide-left" data-aos-offset="200">
                        <img src={opportunitiesInsights} alt="Opportunity insights" />
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
            icon: <MdOutlineInsights />,
            title: "Track performance instantly",
            description: "Monitor key metrics and adjust strategies in real-time to maximize your ROI."
        },
        {
            id: 2,
            icon: <BiTimer />,
            title: "Automate follow-ups",
            description: "Save time with automated follow-ups, ensuring no lead is missed and campaigns run smoothly."
        },
        {
            id: 3,
            icon: <IoStatsChart />,
            title: "Visualize data easily",
            description: "Use interactive charts to spot trends and make confident, data-driven decisions."
        },
        {
            id: 4,
            icon: <RxDashboard />,
            title: "Manage deals efficiently",
            description: "From new opportunities to ongoing deals, handle everything in the Opportunity dashboard."
        }
    ]

    return <FeatureBenefits items={items} title="Maximize success with real-time insights" />

}
export default function CampaignsAndOpportunities() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures />
        <ReadyToTransform />
    </>
}
