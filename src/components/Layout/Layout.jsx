import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowUp } from 'react-icons/fa6';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when path changes
    }, [pathname]); // Dependency on pathname triggers the effect on route change

    function scrolltop() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className="text-darkText lg:pt-[84px] pt-[81px] font-manope overflow-hidden">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <button className="fixed flex justify-center items-center text-white bottom-4 right-4 h-10 aspect-square bg-lightBlue rounded-full z-50" onClick={scrolltop}>
                <FaArrowUp />
            </button>
        </>
    )
}
