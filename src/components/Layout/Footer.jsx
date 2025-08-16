import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaSquareFacebook, FaYoutube } from 'react-icons/fa6'
import { TbBrandLinkedinFilled } from 'react-icons/tb'
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import SocialMedia from '../pages/ReusableSections/SocialMedia'

export default function Footer() {
    const features = [
        {
            title: "User - friendly dashboard ",
            link: "/features/dashboard",
        }, {
            title: "Lead management system",
            link: "/features/lead-management-system",
        }, {
            title: "Detailed statistics",
            link: '/features/realtime-statistics'
        }, {
            title: "Campaigns & opportunities",
            link: '/features/campaigns-and-opportunities'
        }, {
            title: "User management",
            link: '/features/user-management'
        }, {
            title: "Activity tracking",
            link: '/features/activity-tracking'
        }, {
            title: "Action assignment",
            link: '/features/action-assignment'
        }, {
            title: "Real time communication",
            link: '/features/realtime-communication'

        }
    ];

    return <>
        <div className="container bg-white py-8  flex flex-col items-center">
            <div className="flex w-full justify-between gap-36">
                <div className="w-1/4 hidden md:flex flex-col gap-6 ">
                    <div className="w-[170px]">
                        <img src={logo} alt="logo" />
                    </div>
                    <p className='font-medium text-lightgrayText'>Join the ranks of Top Real Estate Professionals—Start closing more deals with confidence! </p>
                </div>

                <div className="lg:w-3/4 ">
                    <div className="flex flex-col lg:flex-row justify-end gap-10 font-medium text-grayText">
                        <div className="flex flex-col gap-3 lg:w-1/3">
                            <h4 className="font-bold text-darkText">Features</h4>
                            {features.map((f, i) => (<Link to={f.link} key={i}>{f.title}</Link>))}
                        </div>
                        <div className="flex flex-col gap-3 lg:w-1/3">
                            <h4 className="font-bold text-darkText">Resources</h4>
                            <Link to={'/help-center'}>Help center</Link>
                            <Link to={'/request-demo'}>Demo</Link>
                            <p>What’s new</p>
                            <Link to={'/webinars'}>Webinars</Link>
                            <Link to={'/blogs'}>Blog</Link>
                            <p>Carrier registration</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-darkText">Company</h4>
                            <Link to="/about-us">About </Link>
                            <Link to="/terms-of-services">Terms of Services</Link>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200 mb-8 mt-20"></div>

            <div className="w-full flex lg:hidden flex-col gap-2 text-center items-center mb-8 ">
                <div className="w-[170px]">
                    <img src={logo} alt="logo" />
                </div>
                <p className='font-medium text-lightgrayText'>Join the ranks of Top Real Estate Professionals—Start closing more deals with confidence! </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-3 justify-between items-center w-full text-lightgrayText">
                <p className="font-medium ">©2024 PropxPro All Rights Reserved.</p>
                <SocialMedia />
            </div>
        </div>
    </>
}
