import React from 'react'
import GetStarted from '../../Buttons/GetStarted'
import heroImg from '../../../assets/images/user-management-feature/imagecard5.png'
import transformTeam from '../../../assets/images/user-management-feature/Group39721.png'
import manageRoles from '../../../assets/images/user-management-feature/Usersmodule.png'
import stayInformed from '../../../assets/images/user-management-feature/DASH.png'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import { useAOSObserver } from '../../../hooks/useAOSObserver'
import FeatureBenefits from '../ReusableSections/FeatureBenefits'
import { RxDashboard } from 'react-icons/rx'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import { LuMessageSquareDot } from 'react-icons/lu'
import { PiUsersThree } from 'react-icons/pi'
import { LiaIdCardSolid } from 'react-icons/lia'


export function HeroSection() {
    return <>
        <FeaturesHeroSection heroImg={heroImg} headline="User management" description="Assign roles from admins to agents, and track performance with ease—Creating a collaborative space for your real estate excellence." />
    </>
}

export function SubFeatures() {
    return <>
        <div className="container lg:!px-0 flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 bg-[#fefaf5] rounded-xl flex flex-col lg:pt-14 pb-5 gap-10 overflow-hidden" >
                    <div className="p-5 lg:px-14">
                        <h2 className="lg:text-3xl text-xl font-bold text-darkText ">Transform your team</h2>
                        <p className="text-md lg:text-xl text-grayText font-medium mt-3 ">Manage users witth ease—and receive nottificattions for all activities—Perfect for your business needs!</p>
                    </div>
                    <div className="lg:pe-14 pe-10 m-0" data-aos="fade-right">
                        <img src={transformTeam} className='w-full' alt="Transform your team" />
                    </div>
                </div>
                <div className="lg:w-1/2 bg-[#f6f5fe] rounded-xl flex flex-col justify-between lg:pt-14 gap-10 overflow-hidden"  >
                    <div className="p-5 lg:px-14 ">
                        <h2 className="lg:text-3xl text-xl font-bold text-darkText ">Manage user roles</h2>
                        <p className="text-md lg:text-xl text-grayText font-medium mt-3 ">Add, update, or delete user profiles easily to keep your team organized and efficient with PropXPro!</p>
                    </div>
                    <div className="lg:pe-20 pe-10 m-0" data-aos="fade-left">
                        <img src={manageRoles} className='w-full' alt="Manage user roles" />
                    </div>
                </div>
            </div>

            <div className="bg-[#fef5f5] rounded-xl flex flex-col lg:pt-14 p-5 pb-0 lg:px-14 gap-10 overflow-hidden" >
                <div className="lg:w-5/6">
                    <h2 className="lg:text-3xl text-xl font-bold text-darkText ">Stay Informed Instantly</h2>
                    <p className="text-md lg:text-xl text-grayText font-medium mt-3 ">Stay updated with every user action in PropXPro CRM—additions, updates, and deletions—right from your notification icon!</p>
                </div>
                <div className="m-auto w-full" data-aos="fade-up" >
                    <img src={stayInformed} className='w-full' alt="Stay Informed Instantly" />
                </div>
            </div>
        </div>
    </>
}

export function LeadSuccessSimplified() {
    const items = [
        {
            id: 1,
            icon: <LiaIdCardSolid />,
            title: "Efficient role assignment",
            description: "Easily assign roles to team members, ensuring everyone knows their responsibilities and can perform at their best."
        },
        {
            id: 2,
            icon: <LuMessageSquareDot />,
            title: "Real-time updates",
            description: "Stay informed with real-time notifications for user additions, updates, and deletions, keeping you in control."
        },
        {
            id: 3,
            icon: <RxDashboard />,
            title: "Streamlined operations",
            description: "Manage your team smoothly with a super user-friendly interface, enhancing your business's overall performance."
        },
        {
            id: 4,
            icon: <PiUsersThree />,
            title: "Improved collaboration",
            description: "Foster better teamwork with clear roles and real-time updates, ensuring seamless collaboration and productivity."
        }
    ]

    return <FeatureBenefits items={items} title="Enhance your team performance" />

}
export default function UserManagement() {
    useAOSObserver()
    return <>
        <HeroSection />
        <SubFeatures />
        <LeadSuccessSimplified />
        <DiscoverFeatures CurrentFeatureId={5} />
        <ReadyToTransform />
    </>
}
