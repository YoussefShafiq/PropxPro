import React from 'react'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import heroImg from '../../../assets/images/about/imagecard10.png'
import highFive from '../../../assets/images/about/high-five.png'
import target from '../../../assets/images/about/marketting-target.png'
import businessDeal from '../../../assets/images/about/business-deal.png'
import frame from '../../../assets/images/about/Frame39720.png'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import SocialMedia from '../ReusableSections/SocialMedia'
import GetStarted from '../../Buttons/GetStarted'
import { FaRegCircleUser } from 'react-icons/fa6'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { SlLike } from 'react-icons/sl'
import { PiUsersThree } from 'react-icons/pi'
import { LiaCertificateSolid } from 'react-icons/lia'

export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline={"Effortless team management and operations solution"} description={'With PropXPro, easily manage your leads, enhance team collaboration, and always close more deals with ease and confidence!'} buttonFlag={false} aboutflag={true} />
    </>
}

export function CloseDealsSection() {
    return <>
        <div className="container flex flex-col lg:flex-row justify-center gap-5" data-aos="fade-up">
            <div className="lg:w-1/2 py-8 flex flex-col gap-5 text-left">
                <h1 className='text-2xl lg:text-5xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Close more deals with confidence</h1>
                <p className='lg:text-2xl  font-medium lg:leading-9 text-darkText text-opacity-80 lg:pe-16'>This is the motto and heartbeat of PropXPro. Designed to empower real estate professionals with a powerful, super user-friendly system for team management and real-time communication. We are committed to transforming your real estate operations into hassle-free experiences. Every deal, every task—handled with ease. Experience a new level of success with PropXPro!!
                </p>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden flex justify-center items-end">
                <img src={highFive} alt="Close more deals with confidence" className='w-2/3' />
            </div>
        </div>
    </>
}

export function RealstateMadeSimpleSection() {
    return <>
        <div className="container flex flex-col lg:flex-row-reverse justify-center gap-5" data-aos="fade-up">
            <div className="lg:w-1/2 py-8 flex flex-col gap-5 text-left">
                <h1 className='text-2xl lg:text-5xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Real estate made simple with PropXPro</h1>
                <p className='lg:text-2xl  font-medium lg:leading-9 text-darkText text-opacity-80 lg:pe-16'>At PropXPro, our vision is to simplify real estate CRM systems. We bring clarity and ease to every transaction—letting you Focus on building relationships and closing deals, while our platform handles the rest. Experience a new level of efficiency and success with PropXPro—your perfect partner for transforming real estate operations. Let's make success easy!</p>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden flex justify-center items-end">
                <img src={target} alt="Real estate made simple with PropXPro" className='w-2/3' />
            </div>
        </div>
    </>
}

export function AchieveRealstateExcellence() {
    return <>
        <div className="container flex flex-col lg:flex-row justify-center gap-5" data-aos="fade-up">
            <div className="lg:w-1/2 py-8 flex flex-col gap-5 text-left">
                <h1 className='text-2xl lg:text-5xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Achieve your real estate excellence</h1>
                <p className='lg:text-2xl  font-medium lg:leading-9 text-darkText text-opacity-80 lg:pe-16'>Our mission is to empower you with a comprehensive CRM that streamlines your workflow, maximizes efficiency, and amplifies your deal-closing potential. We're the driving force behind successful real estate transactions, making PropXPro your perfect business ally. Get ready to change the way you work and achieve more with PropXPro!

                </p>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden flex justify-center items-end">
                <img src={businessDeal} alt="Achieve your real estate excellence" className='w-2/3' />
            </div>
        </div>
    </>
}

export function CoreValues() {
    const items = [
        {
            id: 1,
            icon: <FaRegCircleUser />,
            title: "Customer centricity",
            description: "Your success is our success. We are dedicated to understanding and meeting your needs at every step."
        },
        {
            id: 2,
            icon: <RiLightbulbFlashLine />,
            title: "Innovation",
            description: "Constantly seeking better ways to simplify real estate processes."
        },
        {
            id: 3,
            icon: <SlLike />,
            title: "Integrity",
            description: "Transparency and honesty guide every decision we make."
        },
        {
            id: 3,
            icon: <PiUsersThree />,
            title: "Collaboration",
            description: "We believe in the power of teamwork, both within our organization and in partnership with our clients."
        },
        {
            id: 3,
            icon: <LiaCertificateSolid />,
            title: "Excellence",
            description: "Committing to the highest standards in every aspect of our service."
        }
    ]
    return <>
        <div className="bg-[#131e57] py-16">
            <div className="container flex flex-col gap-10 items-center" data-aos="fade-up" data-aos-offset="200">
                <div className="text-center text-3xl lg:text-5xl leading-[133%] font-extrabold text-white">PropXPro core values </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    {
                        items.map((i) => (
                            <div key={i.id} className="w-full lg:w-1/5 bg-[#1d2861] rounded-2xl p-5 pb-12 flex flex-col" data-aos="fade-up" data-aos-offset="200" data-aos-delay={i.id * 100} >
                                <div className="w-20 text-lightBlue text-3xl">
                                    {i.icon}
                                </div>
                                <div className="text-xl text-white font-bold mt-5">{i.title}</div>
                                <div className="text-base text-white font-medium mt-2 text-opacity-80">{i.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}

export function UnlockExclusiveInsights() {
    return <>
        <div className="bg-[#f6f5fe] py-3 lg:py-14">
            <div className="container flex flex-col lg:flex-row-reverse justify-center gap-5" data-aos="fade-up">
                <div className="lg:w-1/2 py-8 flex flex-col gap-5 text-center lg:text-left">
                    <h1 className='text-3xl lg:text-5xl font-extrabold leading-[139%] lg:leading-[117%] text-darkBlue'>Unlock exclusive real estate insights</h1>
                    <p className='lg:text-2xl  font-medium lg:leading-9 text-darkText text-opacity-80 lg:pe-16'>Stay ahead in real estate management. Follow us for expert tips, updates, and exciting opportunities!
                    </p>
                    <SocialMedia size={'text-3xl'} justify='justify-start' />
                </div>
                <div className="lg:w-1/2 rounded-xl overflow-hidden flex justify-center items-end">
                    <img src={frame} alt="Achieve your real estate excellence" className='w-2/3' />
                </div>
            </div>
        </div>
    </>
}

export default function AboutUs() {
    return <>
        <HeroSection />
        <CloseDealsSection />
        <RealstateMadeSimpleSection />
        <AchieveRealstateExcellence />
        <CoreValues />
        <UnlockExclusiveInsights />
        <ReadyToTransform title='Ready to transform your real estate Business?' />
    </>
}
