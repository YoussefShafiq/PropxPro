import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaSquareFacebook, FaYoutube } from 'react-icons/fa6'
import { TbBrandLinkedinFilled } from 'react-icons/tb'
import logo from '../../assets/images/Logo.png'

export default function Footer() {
    return <>
        <div className="bg-white py-8 px-20 flex flex-col items-center">
            <div className="flex w-full justify-between gap-36">
                <div className="w-1/4 hidden md:flex flex-col gap-6 ">
                    <div className="w-[170px]">
                        <img src={logo} alt="logo" loading='lazy' />
                    </div>
                    <p className='font-medium text-lightgrayText'>Join the ranks of Top Real Estate Professionals—Start closing more deals with confidence! </p>
                </div>

                <div className="w-3/4 ">
                    <div className="flex justify-end gap-10 font-medium text-grayText">
                        <div className="flex flex-col gap-3 w-1/3">
                            <h4 className="font-bold text-darkText">Features</h4>
                            <p>User - freindly dashboard</p>
                            <p>Lead management system</p>
                            <p>Detailed statistics</p>
                            <p>Campaigns & opportunities</p>
                            <p>User management</p>
                            <p>Activity tracking</p>
                            <p>Action assignment</p>
                            <p>Real time communication</p>
                        </div>
                        <div className="flex flex-col gap-3 w-1/3">
                            <h4 className="font-bold text-darkText">Resources</h4>
                            <p>Help center</p>
                            <p>Demo</p>
                            <p>What’s new</p>
                            <p>Webinars</p>
                            <p>Blog</p>
                            <p>Carrier registration</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-darkText">Company</h4>
                            <p>About </p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200 mb-8 mt-20"></div>

            <div className="flex justify-between items-center w-full text-lightgrayText">
                <p className="font-medium ">©2024 PropxPro All Rights Reserved.</p>
                <div className="flex gap-7 text-xl ">
                    <FaSquareFacebook />
                    <FaYoutube />
                    <TbBrandLinkedinFilled />
                    <AiFillInstagram />
                </div>
            </div>
        </div>
    </>
}
