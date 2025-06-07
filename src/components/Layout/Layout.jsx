import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="text-darkText pt-[84px] font-manope">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
