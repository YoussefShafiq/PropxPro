import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { TbBrandLinkedinFilled } from 'react-icons/tb'

export default function SocialMedia({ size = 'text-xl' }) {
    return <>
        <div className={`flex justify-center gap-7 ${size} `}>
            <FaSquareFacebook />
            <FaYoutube />
            <TbBrandLinkedinFilled />
            <AiFillInstagram />
        </div>
    </>
}
