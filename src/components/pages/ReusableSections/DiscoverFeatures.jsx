import React from 'react'
import userFriendly from '../../../assets/images/home/userFriendly.png'
import leadManagement from '../../../assets/images/home/leadManagement.png'
import detailedStats from '../../../assets/images/home/detailedStats.png'
import campaignsAndOpportunities from '../../../assets/images/home/campaignsAndOpportunities.png'
import userManagement from '../../../assets/images/home/userManagement.png'
import activityTracking from '../../../assets/images/home/activityTracking.png'
import actionAssignment from '../../../assets/images/home/actionAssignment.png'
import realtimeCommunication from '../../../assets/images/home/realtimeCommunication.png'
import { NavLink } from 'react-router-dom'

export default function DiscoverFeatures() {

    const features = [
        {
            id: 1,
            title: 'User- Freindly dashboard',
            img: userFriendly,
            link: '/features/dashboard'
        },
        {
            id: 2,
            title: 'Lead management',
            img: leadManagement,
            link: '/features/lead-management-system'
        },
        {
            id: 3,
            title: 'Detailed statistics',
            img: detailedStats,
            link: '/features/realtime-statistics'
        },
        {
            id: 4,
            title: 'Campaigns & opportunities',
            img: campaignsAndOpportunities,
            link: '/features/campaigns-and-opportunities'
        },
        {
            id: 5,
            title: 'User management',
            img: userManagement,
            link: '/features/user-management'
        },
        {
            id: 6,
            title: 'Activity tracking',
            img: activityTracking,
            link: '/features/activity-tracking'
        },
        {
            id: 7,
            title: 'Action assignments',
            img: actionAssignment,
            link: '/features/action-assignment'
        },
        {
            id: 8,
            title: 'Real time communication',
            img: realtimeCommunication,
            link: '/features/realtime-communication'
        }
    ]

    return <>
        <div className="container flex flex-col text-center gap-14">
            <div className="space-y-5">
                <h2 className='text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]'>Discover more</h2>
                <h3 className='lg:text-2xl font-medium text-darkText leading-9' >Explore in-depth every feature PropXPro offers</h3>
            </div>
            <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                    <>
                        <div key={feature.id} className="bg-black rounded-xl w-full lg:w-[calc(25%-12px)]">
                            <div className="bg-white rounded-xl hover:-translate-x-1 hover:-translate-y-1 border-[2px] border-black transition-all p-4">
                                <NavLink to={feature.link} className={'flex flex-col gap-3'}>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src={feature.img} alt={feature.title} className='w-full' />
                                    </div>
                                    <p className='text-xl font-semibold text-darkText' >{feature.title}</p>
                                </NavLink>
                            </div>
                        </div>
                    </>
                    // <div key={feature.id} className="w-full lg:w-[calc(25%-12px)] p-4 pb-10 flex flex-col gap-8 border-2 border-black box-border rounded-xl hover:border-e-4 hover:border-b-4 hover:border-t-0 hover:border-s-0 transition-all cursor-pointer ">
                    //     <NavLink to={feature.link}>
                    //         <div className="overflow-hidden rounded-2xl">
                    //             <img  src={feature.img} alt={feature.title}  />
                    //         </div>
                    //         <p className='text-xl font-semibold text-darkText' >{feature.title}</p>
                    //     </NavLink>
                    // </div>
                ))}
            </div>
        </div>
    </>
}