import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/imagecard3.png'
import dashboard1 from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/dashboard1.png'
import dashboard2 from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/dashboard2.png'
import stats from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/Group-39715.png'
import personalizedViews from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/Group-39897.png'
import operations from '../../../assets/images/Real-time-statistics-&-KPIs-fetaure/operations.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { PiMedalLight } from 'react-icons/pi'
import { LuMessageSquareMore } from 'react-icons/lu'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import { IoStatsChart } from 'react-icons/io5'
import { TfiStatsUp } from 'react-icons/tfi'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import { LiaCertificateSolid } from 'react-icons/lia'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="Real-time statistics & KPIs" description="Track everything from weekly opportunities to yearly trends—Make confident, data-driven decisions every time!" />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fefaf5] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Opportunity tracking</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Spot trends and patterns with interactive graphs showing
                            real-time progress of your opportunities—see your growth!
                        </p>
                    </div>
                    <div className="pe-20" data-aos="slide-right" data-aos-offset="200">
                        <img src={dashboard1} alt="Opportunity tracking" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#f6f5fe] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Personalized views</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Easily view—weekly, monthly, yearly, or custom data with our exciting filtering data tool!</p>
                    </div>
                    <div className="flex flex-col -space-y-10">
                        <div className="pe-28 relative z-10" data-aos="slide-right" data-aos-offset="200">
                            <img src={personalizedViews} alt="Personalized views" />
                        </div>
                        <div className="ps-28" data-aos="slide-left" data-aos-offset="200">
                            <img src={dashboard2} alt="Personalized views" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-7/12 bg-[#fef5f5] rounded-xl flex flex-col justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Instant view</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Hover over any point to see detailed insights instantly—experience real-time data power!</p>
                    </div>
                    <div className="pe-24" data-aos="slide-right" data-aos-offset="200">
                        <img src={operations} alt="Instant view" />
                    </div>
                </div>
                <div className="lg:w-5/12 bg-[#eff9f2] rounded-xl flex flex-col gap-5 pb-10 overflow-hidden">
                    <div className="flex flex-col gap-4 p-10">
                        <h2 className='lg:text-3xl font-bold leading-[100%]'>Comprehensive statistics</h2>
                        <p className='text-sm lg:text-xl font-medium leading-9 text-opacity-80'>Track all your key metrics in one spot—Watch your business grow with actionable, real-time data!</p>
                    </div>
                    <div className="flex flex-col -space-y-5">
                        <div className="" data-aos="slide-left" data-aos-offset="200">
                            <img src={stats} alt="Comprehensive statistics" />
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
            icon: <IoStatsChart />,
            title: "Real-time metrics",
            description: "Get detailed insights on completed operations, new opportunities, and more. Stay ahead and be informed with ease!"
        },
        {
            id: 2,
            icon: <TfiStatsUp />,
            title: "Drive more sales",
            description: "Boost sales with real-time stats —refine strategies, understand clients, & deliver exceptional service to close more deals."
        },
        {
            id: 3,
            icon: <LiaCertificateSolid />,
            title: "Amplify success",
            description: "Use real-time insights to enhance performance and achieve greater business success."
        },
        {
            id: 4,
            icon: <LuMessageSquareMore />,
            title: "Stay connected",
            description: "Track real-time stats and KPIs—identify key relationships, and build trust through consistent communication for long-term success!"
        }
    ]

    return <FeatureBenefits items={items} title="Maximize success with real-time insights" />

}

export default function RealtimeStatistics() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures CurrentFeatureId={3} />
        <ReadyToTransform />
    </>
}
