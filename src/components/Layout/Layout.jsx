import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowUp } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
    const { pathname } = useLocation();
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        // Refresh AOS on route change if screen width >= 1024px
        if (window.innerWidth >= 1024) {
            AOS.refresh();
        }
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

    const origin = typeof window !== 'undefined' && window.location ? window.location.origin : 'https://propxpro.com';
    const canonicalUrl = `${origin}${pathname}`;

    const orgJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PropxPro',
        url: origin,
        logo: `${origin}/Logo.png`,
        sameAs: [
            // Add social profiles if available
        ]
    };

    const webSiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PropxPro',
        url: origin,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${origin}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    };

    return (
        <>
            <Helmet>
                <title>PropxPro</title>
                <meta name="description" content="PropxPro helps you manage leads, campaigns, real-time communication, and analytics with an all-in-one CRM and marketing platform." />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0ea5e9" />

                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph defaults */}
                <meta property="og:site_name" content="PropxPro" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PropxPro" />
                <meta property="og:description" content="PropxPro helps you manage leads, campaigns, real-time communication, and analytics with an all-in-one CRM and marketing platform." />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={`${origin}/Logo.png`} />

                {/* Twitter Card defaults */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PropxPro" />
                <meta name="twitter:description" content="PropxPro helps you manage leads, campaigns, real-time communication, and analytics with an all-in-one CRM and marketing platform." />
                <meta name="twitter:image" content={`${origin}/Logo.png`} />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
            </Helmet>
            <div className="text-darkText lg:pt-[84px] pt-[81px] font-manope">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

            {/* Scroll to top button with animated show/hide */}
            <div
                className={`fixed bottom-5 lg:bottom-2 right-20 lg:right-8 z-50 transition-all duration-300 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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