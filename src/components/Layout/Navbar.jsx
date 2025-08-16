import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/Logo.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import requestDemo from '../../assets/images/navbar/requestDemo.png';
import getHelpimg from '../../assets/images/navbar/help.png';
import guideimg from '../../assets/images/navbar/guide.png';
import { HiOutlineInformationCircle, HiOutlineNewspaper, HiOutlineQuestionMarkCircle, HiOutlineSparkles, HiOutlineUserAdd, HiOutlineVideoCamera } from 'react-icons/hi';
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose, IoStatsChartOutline } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GetStarted from '../Buttons/GetStarted';
import RequestDemo from '../Buttons/RequestDemo';
import { MdOutlineManageAccounts, MdOutlineTrackChanges, MdOutlineCampaign } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlinePieChart } from "react-icons/ai";
import { TbHomeStats } from 'react-icons/tb';
import { GoTasklist } from 'react-icons/go';

export default function Navbar() {
    const [FeaturesDropdown, setFeaturesDropdown] = useState(false);
    const [ResourcesDropdown, setResourcesDropdown] = useState(false);
    const [phoneNavbar, setphoneNavbar] = useState(false);
    const navigate = useNavigate()

    // Refs for dropdown containers and buttons
    const featuresRef = useRef(null);
    const resourcesRef = useRef(null);
    const featuresButtonRef = useRef(null);
    const resourcesButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const mobileMenuButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Don't close if we're on mobile (screen width < 1024px)
            if (window.innerWidth < 1024) return;

            // Close features dropdown if clicked outside (desktop only)
            if (FeaturesDropdown &&
                featuresRef.current &&
                !featuresRef.current.contains(event.target) &&
                featuresButtonRef.current &&
                !featuresButtonRef.current.contains(event.target)) {
                setFeaturesDropdown(false);
            }

            // Close resources dropdown if clicked outside (desktop only)
            if (ResourcesDropdown &&
                resourcesRef.current &&
                !resourcesRef.current.contains(event.target) &&
                resourcesButtonRef.current &&
                !resourcesButtonRef.current.contains(event.target)) {
                setResourcesDropdown(false);
            }

            // Close mobile menu if clicked outside (works for all devices)
            if (phoneNavbar &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                mobileMenuButtonRef.current &&
                !mobileMenuButtonRef.current.contains(event.target)) {
                setphoneNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [FeaturesDropdown, ResourcesDropdown, phoneNavbar]);

    const dropdownVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.05,
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const featureItemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300 }
        },
        closed: {
            opacity: 0,
            y: 10,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const rightPanelVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: { delay: 0, type: "spring", stiffness: 300 }
        },
        closed: {
            opacity: 0,
            x: 20,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const mobileMenuVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.2 }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.2 }
        }
    };

    const mobileDropdownVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.15 }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.15 }
        }
    };

    const features = [
        {
            icon: <TbHomeStats size='24' />,
            title: "User - friendly dashboard",
            desc: "Experience seamless navigation & intuitive designs",
            link: "/features/dashboard",
        },
        {
            icon: <IoStatsChartOutline size='24' />,
            title: "Lead management system",
            desc: "Efficiently track, manage, and nurture your leads",
            link: "/features/lead-management-system",
        },
        {
            icon: <AiOutlinePieChart size='24' />,
            title: "Detailed statistics",
            desc: "Get comprehensive insights and data-driven analysis",
            link: '/features/realtime-statistics',
        },
        {
            icon: <MdOutlineCampaign size='24' strokeWidth={0.0} />,
            title: "Campaigns & opportunities",
            desc: "Drive growth with strategic campaigns and new opportunities",
            link: '/features/campaigns-and-opportunities',
        },
        {
            icon: <MdOutlineManageAccounts size='24' />,
            title: "User management",
            desc: "Seamlessly onboard users with a streamlined registration process",
            link: '/features/user-management',
        },
        {
            icon: <MdOutlineTrackChanges size='24' />,
            title: "Activity tracking",
            desc: "Effortlessly monitor and analyze user actions for valuable insights",
            link: '/features/activity-tracking',
        },
        {
            icon: <GoTasklist size='24' />,
            title: "Action assignment",
            desc: "Efficiently delegate tasks and track progress seamlessly",
            link: '/features/action-assignment',
        },
        {
            icon: <HiOutlineChatAlt2 size='24' />,
            title: "Real time communication",
            desc: "Instantly connect and collaborate in real-time",
            link: '/features/realtime-communication',
        }
    ];

    const resources = [
        {
            icon: <HiOutlineInformationCircle size={30} strokeWidth={1} />,
            title: "About us",
            desc: "Discover our mission and values, driving excellence and innovation",
            link: '/about-us'
        },
        {
            icon: <HiOutlineVideoCamera size={24} strokeWidth={1} />,
            title: "Webinars",
            desc: "Learn from experts in our interactive sessions",
            link: '/webinars'
        },
        {
            icon: <HiOutlineNewspaper size={24} strokeWidth={1} />,
            title: "Blog",
            desc: "Stay informed with our latest news, tips, and industry insights",
            link: '/blog'
        },
        {
            icon: <HiOutlineUserAdd size={24} strokeWidth={1} />,
            title: "Carrier registration",
            desc: "Join our network today to unlock exclusive opportunities",
            link: '/request-demo'
        },
        {
            icon: <HiOutlineQuestionMarkCircle size={24} strokeWidth={1} />,
            title: "Help center",
            desc: "Access tailored solutions and assistance.",
            link: '/help-center'
        },
        {
            icon: <HiOutlineSparkles size={24} strokeWidth={1} />,
            title: "What's new",
            desc: "Effortlessly monitor and analyze user actions for valuable insights",
            link: '/whats-new'
        }
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed z-50 top-0 left-0 right-0 bg-white hidden lg:flex justify-between items-center h-[84px] px-28 py-3 shadow">
                <div className="w-36">
                    <NavLink to={"/"}><img loading='lazy' src={logo} className='w-full' alt="logo" /></NavLink>
                </div>

                <div className="flex items-center gap-x-4 h-full select-none">
                    <NavLink to="/pricing" className="font-semibold transition-all cursor-pointer hover:underline hover:text-hoverText">Pricing</NavLink>
                    <div
                        ref={featuresButtonRef}
                        className={`font-semibold flex items-end gap-1 transition-all cursor-pointer hover:underline hover:text-hoverText ${FeaturesDropdown && 'underline text-hoverText'}`}
                        onClick={() => { setFeaturesDropdown(!FeaturesDropdown); setResourcesDropdown(false) }}
                    >
                        Features
                        <div className={`transition-all ${FeaturesDropdown && 'rotate-180'}`}>
                            <IoIosArrowDown size={18} />
                        </div>
                    </div>
                    <NavLink to={"/integrations"} className="font-semibold transition-all cursor-pointer hover:underline hover:text-hoverText">Integrations</NavLink>
                    <div
                        ref={resourcesButtonRef}
                        className={`font-semibold flex items-end gap-1 transition-all cursor-pointer hover:underline hover:text-hoverText ${ResourcesDropdown && 'underline text-hoverText'}`}
                        onClick={() => { setResourcesDropdown(!ResourcesDropdown); setFeaturesDropdown(false) }}
                    >
                        Resources
                        <div className={`transition-all ${ResourcesDropdown && 'rotate-180'}`}>
                            <IoIosArrowDown size={18} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-4 font-semibold">
                    <a href='https://dev.vtech-upgraded.com/' target='_blank' className="hover:scale-[1.002] transition-all">Login</a>
                    <a href='https://dev.vtech-upgraded.com/signup' target='_blank' className="capitalize bg-lightBlue text-white hover:shadow-lg hover:bg-[#1e4c9d] hover:scale-[1.002] transition-all px-7 py-3 rounded-md">get started</a>
                    <Link to={'/request-demo'} className="box-border border border-black hover:shadow-lg hover:scale-[1.002] transition-all px-7 py-3 rounded-md">Request a Demo</Link>
                </div>
            </div>

            {/* Desktop Dropdown Menus */}
            <div className="hidden lg:block">
                <AnimatePresence>
                    {ResourcesDropdown && (
                        <motion.div
                            ref={resourcesRef}
                            className="fixed z-50 top-[84px] left-0 right-0 px-20 py-8 bg-white flex justify-between items-start shadow-lg gap-20"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                        >
                            <div className="w-1/2 flex flex-wrap items-start">
                                {resources.map((r, index) => (
                                    <motion.div
                                        key={index}
                                        className="px-3 py-2 flex gap-2 w-1/2 h-fit"
                                        variants={featureItemVariants}
                                    >
                                        <NavLink to={r.link} className={'hover:text-hoverText transition-all'} onClick={() => { setResourcesDropdown(!ResourcesDropdown); }}>
                                            <div>{r.icon}</div>
                                            <div>
                                                <h2 className='font-bold'>{r.title}</h2>
                                                <p className='text-grayText text-sm font-medium'>{r.desc}</p>
                                            </div>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="w-1/2 flex justify-center gap-5"
                                variants={rightPanelVariants}
                            >
                                <div className="flex flex-col gap-y-2">
                                    <div className="bg-[#fff5c0] rounded-lg">
                                        <img loading='lazy' src={getHelpimg} className='w-full' alt="requestDemo" />
                                    </div>
                                    <div className="font-bold">Get help</div>
                                    <p className="text-grayText text-sm font-medium">
                                        Find comprehensive solutions to your questions and concerns
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="bg-[#ffc0e6] rounded-lg">
                                        <img loading='lazy' src={guideimg} className='w-full' alt="requestDemo" />
                                    </div>
                                    <div className="font-bold">Guide to carrier registration</div>
                                    <p className="text-grayText text-sm font-medium">
                                        Discover the registration process, Step by Step
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {FeaturesDropdown && (
                        <motion.div
                            ref={featuresRef}
                            className="fixed z-50 top-[84px] left-0 right-0 px-20 py-8 bg-white flex justify-between items-start shadow-lg gap-20"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                        >
                            <div className="w-3/4 flex flex-wrap items-start">
                                {features.map((f, index) => (
                                    <motion.div
                                        key={index}
                                        className="px-3 py-2 flex gap-2 w-1/3 h-fit"
                                        variants={featureItemVariants}
                                    >
                                        <NavLink to={f.link} className={'hover:text-hoverText transition-all'} onClick={() => { setFeaturesDropdown(!FeaturesDropdown); }}>
                                            <div>{f.icon}</div>
                                            <div>
                                                <h2 className='font-bold'>{f.title}</h2>
                                                <p className='text-grayText text-sm font-medium'>{f.desc}</p>
                                            </div>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="w-1/4 flex justify-center"
                                variants={rightPanelVariants}
                            >
                                <div className="flex flex-col gap-y-2">
                                    <img loading='lazy' src={requestDemo} className='w-full' alt="requestDemo" />
                                    <div className="font-bold">Request a Demo</div>
                                    <p className="text-grayText text-sm font-medium">
                                        Discover our features in action—request your demo now!
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Navbar */}
            <div className="w-full h-[81px] fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-8 bg-white select-none">
                <div className="w-36">
                    <NavLink to="/"><img loading='lazy' src={logo} className='w-full' alt="logo" /></NavLink>
                </div>

                <motion.div
                    ref={mobileMenuButtonRef}
                    className="text-3xl cursor-pointer transition-all"
                    onClick={() => setphoneNavbar(!phoneNavbar)}
                    whileTap={{ scale: 0.9 }}
                >
                    {phoneNavbar ? <IoClose /> : <RxHamburgerMenu />}
                </motion.div>

                <AnimatePresence>
                    {phoneNavbar && (
                        <motion.div
                            ref={mobileMenuRef}
                            className="w-full fixed top-[81px] left-0 right-0 bg-white z-40 overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                        >
                            <div className="py-5 px-8 overflow-y-auto max-h-[80vh]">
                                <div className="flex flex-col gap-y-3 font-semibold">
                                    <NavLink to="/pricing" onClick={() => setphoneNavbar(false)}>pricing</NavLink>

                                    <div className="flex justify-between items-center">
                                        <div>features</div>
                                        <motion.div
                                            className="text-3xl cursor-pointer transition-all"
                                            onClick={(e) => { e.stopPropagation(); setFeaturesDropdown(!FeaturesDropdown); setResourcesDropdown(false) }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IoIosArrowUp className={`${!FeaturesDropdown && "rotate-180"} transition-all`} />
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {FeaturesDropdown && (
                                            <motion.div
                                                className="overflow-hidden"
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={mobileDropdownVariants}
                                            >
                                                <div className="flex flex-col gap-y-3 ps-3 py-2">
                                                    {features.map((f, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex gap-2"
                                                            onClick={() => setphoneNavbar(false)}
                                                        >
                                                            <NavLink to={f.link}>{f.title}</NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <NavLink to="/integrations" onClick={() => setphoneNavbar(false)}>integrations</NavLink>

                                    <div className="flex justify-between items-center">
                                        <div>resources</div>
                                        <motion.div
                                            className="text-3xl cursor-pointer transition-all"
                                            onClick={(e) => { e.stopPropagation(); setResourcesDropdown(!ResourcesDropdown); setFeaturesDropdown(false) }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IoIosArrowUp className={`${!ResourcesDropdown && "rotate-180"} transition-all`} />
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {ResourcesDropdown && (
                                            <motion.div
                                                className="overflow-hidden"
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={mobileDropdownVariants}
                                            >
                                                <div className="flex flex-col gap-y-3 ps-3 py-2">
                                                    {resources.map((r, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex gap-2"
                                                            onClick={() => setphoneNavbar(false)}
                                                        >
                                                            <NavLink to={r.link} >{r.title}</NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <GetStarted />
                                    <RequestDemo mode="transparent" />
                                    <button className="">Login</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}