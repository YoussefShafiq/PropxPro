import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaCaretDown, FaFacebook, FaTwitter, FaPinterest, FaBehanceSquare, FaChevronRight } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

export default function Article() {
    const { slug } = useParams();
    const [tableOfContent, setTableOfContent] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [matches, setMatches] = useState([]);
    const [activeMatch, setActiveMatch] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);
    const highlightRefs = useRef([]);
    const navigate = useNavigate();

    const { data: articleData, isLoading, isError, error } = useQuery({
        queryKey: [`article-${slug}`],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/help-center/topic/${slug}`)
        },
        retry: false // Disable retries to handle 404 immediately
    });

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Handle 404 errors
    useEffect(() => {
        if (isError && error?.response?.status === 404) {
            toast.error('Article not found');
            navigate('/help-center', { replace: true });
        } else if (isError) {
            toast.error('Failed to load article');
        }
    }, [isError, error, navigate]);

    // Scroll to heading with offset
    const scrollToHeading = (headingId, event) => {
        if (event) event.preventDefault();
        const element = document.getElementById(headingId);
        if (element) {
            const navbarHeight = 95;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Scroll progress calculation
    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
            if (!contentElement) return;

            const contentRect = contentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const contentHeight = contentElement.offsetHeight;

            const scrolled = Math.max(0, -contentRect.top);
            const maxScroll = contentHeight - windowHeight + contentRect.top + window.pageYOffset;
            const progress = Math.min(100, Math.max(0, (scrolled / Math.max(1, maxScroll)) * 100));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [articleData?.data?.data]);

    // Loading Skeleton Components
    const ArticleLoadingSkeleton = () => (
        <div className="animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="bg-gray-200">
                <div className="container !py-5 flex flex-wrap items-center gap-3">
                    <div className="h-4 w-40 bg-gray-300 rounded"></div>
                    <FaChevronRight size={10} className="text-gray-300" />
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Hero Section Skeleton */}
            <div className="container flex flex-col gap-8 mt-6">
                <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
                <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-32 bg-gray-300 rounded"></div>
                        <div className="h-3 w-40 bg-gray-300 rounded"></div>
                        <div className="h-3 w-48 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="container mt-8 space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            </div>

            {/* Table of Contents Skeleton */}
            <div className="container mt-8 hidden lg:block">
                <div className="w-1/4 float-right">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${80 - i * 10}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const ErrorState = () => (
        <div className="container py-10 text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">
                    {error?.response?.status === 404
                        ? "The article you're looking for doesn't exist."
                        : "Failed to load the article. Please try again later."}
                </span>
                <button
                    className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                    onClick={() => navigate('/help-center')}
                >
                    Back to Help Center
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Progress bar - only show when content is loaded */}
            {!isLoading && !isError && articleData?.data?.data && (
                <div className="sticky lg:top-[84px] top-[81px] z-10">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-lightBlue h-2 rounded-full transition-all duration-150 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {isLoading ? (
                <ArticleLoadingSkeleton />
            ) : isError ? (
                <ErrorState />
            ) : articleData?.data?.data ? (
                <>
                    {/* Breadcrumb */}
                    <div className="bg-gray-200">
                        <div className="container !py-5 flex flex-wrap items-center gap-3">
                            <span
                                className='hover:text-hoverText hover:underline cursor-pointer text-grayText text-opacity-80'
                                onClick={() => navigate('/help-center')}
                            >
                                PropXPro help center
                            </span>
                            {articleData?.data?.data?.category_name && <><FaChevronRight size={10} /></>}
                            <span
                                className='hover:text-hoverText hover:underline cursor-pointer text-grayText text-opacity-80'
                                onClick={() => navigate(`/help-center/category/${articleData?.data?.data?.category_id}`)}
                            >
                                {articleData?.data?.data?.category_name}
                            </span>
                            <FaChevronRight size={10} />
                            <span>{articleData.data.data.title}</span>
                        </div>
                    </div>

                    <div className="container flex flex-col gap-5">
                        {/* Hero Section */}
                        <div className="flex flex-col gap-8">
                            <h1 className='text-3xl font-extrabold lg:text-4xl'>{articleData.data.data.title}</h1>
                            <div className="flex gap-2 items-center text-sm font-medium">
                                <div className="h-12 aspect-square rounded-full shadow overflow-hidden">
                                    <img
                                        src={articleData?.data?.data?.author?.profile_photo}
                                        alt={articleData?.data?.data?.author?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-lg font-semibold'>{articleData.data.data.author.name}</p>
                                    <p>Last updated: {formatDate(articleData.data.data.updated_at)}</p>
                                    <p className='text-xs'>{articleData.data.data.author.bio}</p>
                                </div>
                            </div>
                        </div>

                        {/* Main content wrapper */}
                        <div className="relative flex flex-col lg:flex-row justify-between gap-4">
                            {/* Table of content for mobile */}
                            {articleData?.data?.data?.headings?.length > 0 && (
                                <div className="lg:hidden">
                                    <button
                                        className="font-semibold text-gray-800 bg-white flex justify-between w-full items-center hover:text-lightBlue"
                                        onClick={() => setTableOfContent(!tableOfContent)}
                                    >
                                        Table of Contents
                                        <FaCaretDown className={`${tableOfContent ? 'rotate-180' : 'rotate-0'} duration-500`} />
                                    </button>
                                    <div className="flex flex-col gap-2 max-h-[calc(100vh-150px)] overflow-y-auto">
                                        {tableOfContent && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                {articleData.data.data.headings.map((h, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={(e) => scrollToHeading(h.id, e)}
                                                        className={`${h.level == 1
                                                            ? 'ps-0 text-base font-bold text-gray-900 hover:text-hoverText'
                                                            : h.level == 2
                                                                ? 'ps-3 text-sm font-semibold text-gray-700 hover:text-hoverText'
                                                                : 'ps-6 text-sm font-normal text-gray-500 hover:text-gray-700'
                                                            } transition-colors duration-200 py-1 block border-l-2 border-transparent hover:border-hoverText pl-2 text-left cursor-pointer bg-transparent border-none`}
                                                    >
                                                        {h.text}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Article content */}
                            <div className="lg:w-3/4">
                                <div
                                    ref={contentRef}
                                    className="content !ms-0 !ps-0"
                                    dangerouslySetInnerHTML={{ __html: articleData?.data?.data?.content || '' }}
                                />
                            </div>

                            {/* Sticky sidebar with table of contents */}
                            {articleData?.data?.data?.headings?.length > 0 && (
                                <div className="w-full lg:w-1/4 lg:block">
                                    <div className="sticky top-[84px]">
                                        <div className="flex flex-col gap-2 max-h-[calc(100vh-150px)] overflow-y-auto">
                                            <h4 className="font-semibold text-gray-800 mb-2 sticky top-0 bg-white pt-5 pb-2">
                                                Table of Contents
                                            </h4>
                                            {articleData.data.data.headings.map((h, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => scrollToHeading(h.id, e)}
                                                    className={`${h.level == 1
                                                        ? 'ps-0 text-base font-bold text-gray-900 hover:text-hoverText'
                                                        : h.level == 2
                                                            ? 'ps-3 text-sm font-semibold text-gray-700 hover:text-hoverText'
                                                            : 'ps-6 text-sm font-normal text-gray-500 hover:text-gray-700'
                                                        } transition-colors duration-200 py-1 block border-l-2 border-transparent hover:border-hoverText pl-2 text-left cursor-pointer bg-transparent border-none`}
                                                >
                                                    {h.text}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Article footer */}
                        <div className="w-full h-[1px] bg-gray-300 mt-10"></div>
                        <div className="flex justify-between items-center py-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 aspect-square rounded-full overflow-hidden">
                                        <img
                                            src={articleData?.data?.data?.author?.profile_photo}
                                            alt={articleData?.data?.data?.author?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className='font-extrabold'>By {articleData?.data?.data?.author?.name}</h3>
                                </div>
                                <p className='text-xs'> {articleData?.data?.data?.author?.bio} </p>
                            </div>
                            <div className="flex items-center gap-4 text-xl text-gray-700">
                                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                                <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                                <FaPinterest className="hover:text-red-600 cursor-pointer" />
                                <FaBehanceSquare className="hover:text-blue-800 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}