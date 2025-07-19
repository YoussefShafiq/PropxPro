import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowUp } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
    const { pathname } = useLocation();
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 300,  // Shorter duration for smoother feel
            easing: 'ease-in-out',
            once: false     // Allow animations to trigger multiple times
        });
    }, []);

    // Handle scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Show/hide scroll button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300 && !showScrollButton) {
                setIsAnimating(true);
                setShowScrollButton(true);
            } else if (window.scrollY <= 300 && showScrollButton) {
                setIsAnimating(true);
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showScrollButton]);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="text-darkText lg:pt-[84px] pt-[81px] font-manope">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

            {/* Scroll to top button with animated show/hide */}
            <div
                className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="300"
                onAnimationEnd={() => setIsAnimating(false)}
            >
                <button
                    className="flex justify-center items-center text-white h-10 aspect-square bg-lightBlue rounded-full hover:bg-opacity-90 transition-colors"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            </div>
        </>
    )
}