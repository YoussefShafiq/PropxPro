import React, { useEffect, useRef, useState } from 'react'
import heroImg from '../../../assets/images/integration/imagecard9.png'
import zapierlogo from '../../../assets/images/integration/zapierlogo.png'
import highlight from '../../../assets/images/integration/Highlight_05.png'
import Frame39772 from '../../../assets/images/integration/Frame39772.png'
import FeaturesHeroSection from '../ReusableSections/FeaturesHeroSection'
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'
import ReadyToTransform from '../ReusableSections/ReadyToTransform'
import LearnMore from '../../Buttons/LearnMore'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import StayConnected from '../ReusableSections/StayConnected'
import BlogCard from './BlogCard'


export function Blogs() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const { data: blogs, isLoading, isError } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => {
            return axios.get('https://propxpro.run.place/api/landing/blogs/active')
        }
    });

    // Show 6 items per page (2 rows of 3 items each)
    const itemsPerPage = 6;
    const totalSlides = Math.ceil((blogs?.data?.data?.length || 0) / itemsPerPage);

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    // Group items into pages of 6 items each
    const groupedItems = [];
    if (blogs?.data?.data) {
        for (let i = 0; i < blogs.data.data.length; i += itemsPerPage) {
            groupedItems.push(blogs.data.data.slice(i, i + itemsPerPage));
        }
    }

    // Render pagination with page number and dots
    const renderPagination = () => {
        if (totalSlides <= 1) return null;

        return (
            <div className="flex items-center gap-1">
                {/* Show dots before number if not first page */}
                {currentSlide > 0 && (
                    <span className="text-gray-400">...</span>
                )}

                {/* Current page number */}
                <span className="px-2 py-1 rounded bg-blue-500 text-white">
                    {currentSlide + 1}
                </span>

                {/* Show dots after number if not last page */}
                {currentSlide < totalSlides - 1 && (
                    <span className="text-gray-400">...</span>
                )}
            </div>
        );
    };

    return (
        <div className="bg-[#f6f6f9]">
            <div className="container flex flex-col gap-5" data-aos="fade-up">
                <div className="flex justify-between">
                    <h2 className='font-bold text-2xl lg:text-5xl'>All posts</h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {groupedItems.map((page, pageIndex) => (
                            <div key={pageIndex} className="w-full flex-shrink-0" >
                                <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                                    {page.slice(0, 6).map((i, index) => (
                                        <BlogCard blog={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom Pagination Controls */}
                <div className="flex justify-between items-center gap-4 mt-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`w-40 rounded-full flex items-center justify-start transition-colors gap-3 ${currentSlide === 0
                            ? ' cursor-not-allowed'
                            : ''
                            }`}
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong /> <div className="">Previous</div>
                    </button>

                    {renderPagination()}

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        className={`w-40 h-10 rounded-full flex items-center justify-end transition-colors gap-3 ${currentSlide === totalSlides - 1
                            ? 'cursor-not-allowed'
                            : ''
                            }`}
                        aria-label="Next"
                    >
                        <div className="">Next</div><FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
}



export default function AllPosts() {
    return <>
        <Blogs />
        <StayConnected />
        <ReadyToTransform />
    </>
}
