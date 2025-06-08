import React from 'react'
import GetStarted from '../Buttons/GetStarted'
import dashboardImg from '../../assets/images/home/dashboard1.png'
import userFriendlyDashboard from '../../assets/images/home/userFriendlyDashboard.png'
import leadManagement1 from '../../assets/images/home/leadManagement1.png'
import leadManagement2 from '../../assets/images/home/leadManagement2.png'
import communication1 from '../../assets/images/home/WriteAmessage.png'
import communication2 from '../../assets/images/home/Real-TimeCommunication2.png'
import teamsChat from '../../assets/images/home/teamsChat.png'
import phoneNumbers from '../../assets/images/home/phoneNumbers.png'
import calling from '../../assets/images/home/calling.png'

export function HeroSection() {
    return <>
        <div className="w-4/5 m-auto text-center flex flex-col gap-8 items-center py-28" data-aos="fade-up" data-aos-offset="200">
            <h1 className='font-extrabold text-7xl'>Experience smart, fast, and user-friendly PropXPro CRM</h1>
            <p className='font-medium text-2xl w-[65%] text-grayText' >The game-changer sales system—expertly designed to simplify every step of your real estate success!</p>
            <GetStarted />
        </div>
    </>
}

export function Userfriendly() {
    return <>
        <div className="p-16 px-24 flex w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="w-1/2 pe-16">
                <div className="text-5xl font-extrabold text-darkText leading-[133%]">User-friendly dashboard</div>
                <div className="text-2xl text-grayText font-medium mt-6 leading-9">View all your KPIs—track weekly, monthly, and yearly opportunities. Make practical, informed decisions that lead to confident, winning outcomes—let’s achieve success together!</div>
            </div>
            <div className="w-1/2 bg-[#eff9f2] pt-14 ps-14 rounded-xl flex items-end justify-end">
                <img src={userFriendlyDashboard} alt="user-friendly dashboard" className='w-full' loading='lazy' />
            </div>
        </div>
    </>
}

export function LeadManagement() {
    return <>
        <div className="p-16 px-24 flex w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="w-1/2 pe-16">
                <div className="text-5xl font-extrabold text-darkText leading-[133%]">Lead management system</div>
                <div className="text-2xl text-grayText font-medium mt-6 leading-9">All your leads in one place—PropXPro brings all your lead sources into one platform. Whether via round-robin, individual, or campaign-based strategies, managing and assigning becomes effortless with PropXPro.</div>
            </div>
            <div className="w-1/2 bg-[#f5f9fe] rounded-xl flex flex-col py-14 gap-4">
                <div className="flex justify-end">
                    <img src={leadManagement1} className='w-4/5' alt="user-friendly dashboard" loading='lazy' />
                </div>
                <div className="flex justify-start">
                    <img src={leadManagement2} className='w-4/5' alt="user-friendly dashboard" loading='lazy' />
                </div>
            </div>
        </div>
    </>
}

export function RealTimeCommunication() {
    return <>
        <div className="p-16 px-24 flex w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200" >
            <div className="w-1/2 pe-16">
                <div className="text-5xl font-extrabold text-darkText leading-[133%]">Real time communication</div>
                <div className="text-2xl text-grayText font-medium mt-6 leading-9">With our own integrated communication tool like PropXChat—You stay in constant touch with your team and clients, ensuring no opportunity slips through the cracks.</div>
            </div>
            <div className="w-1/2 bg-[#fef5f5] rounded-xl flex flex-col py-14 gap-4 relative overflow-hidden">
                <div className="flex justify-end">
                    <img src={communication1} className='w-4/5' alt="user-friendly dashboard" loading='lazy' />
                </div>
                <div className="flex justify-start absolute bottom-[20%] left-[8%] w-1/3 shadow-xl rounded-xl">
                    <img src={communication2} className='w-full' alt="user-friendly dashboard" loading='lazy' />
                </div>
            </div>
        </div>
    </>
}

export function ChatsAndCalling() {
    return <>
        <div className="p-16 px-24 flex flex-col gap-10">
            <div className="flex gap-10">
                <div className="w-3/5 bg-[#fefaf5] rounded-xl flex flex-col pt-14 pe-14 gap-10" data-aos="fade-up" data-aos-offset="200" >
                    <div className="px-14">
                        <div className="text-3xl font-bold text-darkText ">Teams chat</div>
                        <div className="text-xl text-grayText font-medium mt-3 ">PropXPro Team chat enhances your productivity through streamlined communication and collaboration. Discover how easy growth can be—let's get started together!</div>
                    </div>
                    <div className="pe-10">
                        <img src={teamsChat} className='w-full' alt="teams chat" loading='lazy' />
                    </div>
                </div>
                <div className="w-2/5 bg-[#f6f5fe] rounded-xl flex flex-col pt-14  gap-10" data-aos="fade-up" data-aos-offset="200" >
                    <div className="px-14 ">
                        <div className="text-3xl font-bold text-darkText ">Phone numbers</div>
                        <div className="text-xl text-grayText font-medium mt-3 ">Start simplifying your communications with a new work number—perfectly fit for all your business needs!</div>
                    </div>
                    <div className="ps-14">
                        <img src={phoneNumbers} className='w-full' alt="phone numbers" loading='lazy' />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="bg-[#fef5f5] rounded-xl flex flex-col pt-14 px-14 gap-10" data-aos="fade-up" data-aos-offset="200" >
                    <div className="w-5/6">
                        <div className="text-3xl font-bold text-darkText ">Calling and messaging</div>
                        <div className="text-xl text-grayText font-medium mt-3 ">Transform your team’s connectivity with PropXPro's advanced calls, group chats, real-time messaging with multimedia file-sharing and more—discover communication that truly connects!</div>
                    </div>
                    <div className="m-auto w-full">
                        <img src={calling} className='w-full' alt="calling and messaging" loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default function Home() {
    return <>
        <HeroSection />
        <div className="w-5/6 m-auto">
            <img src={dashboardImg} className='w-full' alt="user-friendly dashboard" loading='lazy' />
        </div>
        <div className="py-28 space-y-4" data-aos="fade-up" data-aos-offset="200">
            <div className="text-3xl font-medium text-center text-grayText leading-9">Explore performance metric at a glance</div>
            <div className="text-7xl text-darkText text-center font-extrabold leading-[115%]">Close deals with ease & confidence</div>
        </div>
        <Userfriendly />
        <LeadManagement />
        <RealTimeCommunication />
        <ChatsAndCalling />
    </>
}
