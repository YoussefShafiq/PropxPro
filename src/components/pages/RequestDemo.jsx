import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export function HeroSection() {
    return <>
        <div className="bg-demo bg-cover">
            <div className="container  lg:px-20 m-auto text-center flex flex-col gap-8 items-center py-8 lg:py-28" >
                <h1 className='font-extrabold text-4xl leading-[117%] lg:text-6xl md:w-4/5'>Your gateway to next level real estate management</h1>
                <p className='font-medium lg:text-2xl  text-grayText md:w-1/2' >Share a few details and experience the transformative power of PropXPro with an exclusive demo now!</p>
            </div>
        </div>
    </>
}

export function DemoForm() {
    const demoExpectations = [
        'Complete CRM Walkthrough to explore every feature of PropXPro and see how it fits into your workflow.',
        'Discover how our system effortlessly gathers all your leads from various sources, enabling you and your team to focus on what matters – closing deals.',
        'Learn how to track performances of your team’s operation to optimize campaigns for maximum ROI.',
        'Learn to create and manage campaigns with ease. Whether it’s a Facebook campaign, Cold Calling, SMS marketing or even personal referral.',
        'Explore our unique system designed to keep leads from slipping through the cracks.',
        'See how our system keeps the conversation going, even with unresponsive leads.'
    ]
    return <>
        <div className="container flex flex-col lg:flex-row gap-28 items-center">
            <div className="space-y-8 w-1/2">
                <h2 className='text-3xl font-bold'>What to expect in your  demo</h2>
                <div className="space-y-3">
                    {demoExpectations.map((e, i) => (<>
                        <p className='text-[18px]  font-medium flex  items-start opacity-80'><div><FaCheck className="w-10 mt-1.5 text-base" /></div><p>{e}</p></p>
                    </>))}
                </div>
            </div>
            <div className="space-y-8 w-1/2">
                <h2 className='text-3xl font-bold'>What to expect in your demo</h2>
                <form>
                    <PhoneInput
                        country={'us'}
                        placeholder="Enter your phone number"
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </form>
            </div>
        </div>
    </>
}

export default function RequestDemo() {
    return <>
        <HeroSection />
        <DemoForm />
    </>
}
