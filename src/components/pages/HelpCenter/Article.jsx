import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaCaretDown, FaFacebook, FaTwitter, FaPinterest, FaBehanceSquare } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Article() {
    const { slug } = useParams();
    const [tableOfContent, setTableOfContent] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [matches, setMatches] = useState([]);
    const [activeMatch, setActiveMatch] = useState(0);
    const contentRef = useRef(null);
    const highlightRefs = useRef([]);

    const { data: articleData, isLoading, isError, error } = useQuery({
        queryKey: [`article-${slug}`],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/help-center/topic/${slug}`)
        }
    });

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Function to handle smooth scrolling with offset
    const scrollToHeading = (headingId, event) => {
        if (event) event.preventDefault();
        const element = document.getElementById(headingId);
        if (element) {
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Improved search functionality
    useEffect(() => {
        if (!searchTerm.trim() || !contentRef.current) {
            setMatches([]);
            setActiveMatch(0);
            removeHighlights();
            return;
        }

        // Store original content to restore later
        const originalContent = contentRef.current.innerHTML;

        // Remove any existing highlights first
        removeHighlights();

        // Get all text content and find matches
        const textContent = contentRef.current.textContent || contentRef.current.innerText;
        const regex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const foundMatches = [];
        let match;

        while ((match = regex.exec(textContent)) !== null) {
            foundMatches.push({
                index: match.index,
                length: match[0].length,
                text: match[0]
            });
        }

        setMatches(foundMatches);
        setActiveMatch(0);

        if (foundMatches.length > 0) {
            highlightMatches(foundMatches, textContent);
        }

    }, [searchTerm, articleData]);

    const highlightMatches = (matches, textContent) => {
        if (!contentRef.current || matches.length === 0) return;

        try {
            // Create a new version of the content with highlights
            let highlightedContent = textContent;
            let offset = 0;

            // Sort matches by index to process them in order
            const sortedMatches = [...matches].sort((a, b) => a.index - b.index);

            sortedMatches.forEach((match, i) => {
                const startPos = match.index + offset;
                const endPos = startPos + match.length;

                const beforeText = highlightedContent.substring(0, startPos);
                const matchText = highlightedContent.substring(startPos, endPos);
                const afterText = highlightedContent.substring(endPos);

                const highlightSpan = `<span class="search-highlight bg-yellow-200 text-black" data-match-index="${i}">${matchText}</span>`;

                highlightedContent = beforeText + highlightSpan + afterText;
                offset += highlightSpan.length - matchText.length;
            });

            // Update the content with highlighted version
            contentRef.current.innerHTML = highlightedContent;

            // Store references to highlight spans
            highlightRefs.current = Array.from(contentRef.current.querySelectorAll('.search-highlight'));

            // Scroll to first match
            if (highlightRefs.current.length > 0) {
                scrollToMatch(0);
            }
        } catch (error) {
            console.error('Error highlighting matches:', error);
            // Fallback: just scroll to first match without highlighting
            setMatches([]);
        }
    };

    const removeHighlights = () => {
        if (!contentRef.current) return;

        // Find all highlight spans and replace them with their text content
        const highlights = contentRef.current.querySelectorAll('.search-highlight');
        highlights.forEach(span => {
            const textNode = document.createTextNode(span.textContent);
            span.parentNode.replaceChild(textNode, span);
        });

        // Normalize text nodes
        contentRef.current.normalize();
        highlightRefs.current = [];
    };

    const scrollToMatch = (index) => {
        if (matches.length === 0 || !highlightRefs.current.length) return;

        const matchIndex = (index + matches.length) % matches.length;
        setActiveMatch(matchIndex);

        const span = highlightRefs.current[matchIndex];
        if (span) {
            // Remove active class from all matches
            highlightRefs.current.forEach(s => {
                s.className = 'search-highlight bg-yellow-200 text-black';
            });

            // Add active class to current match
            span.className = 'search-highlight bg-yellow-400 text-black font-bold';

            // Scroll to the match
            span.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleNextMatch = () => {
        scrollToMatch(activeMatch + 1);
    };

    const handlePrevMatch = () => {
        scrollToMatch(activeMatch - 1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Clean up highlights when component unmounts or search term changes
    useEffect(() => {
        return () => {
            if (contentRef.current) {
                removeHighlights();
            }
        };
    }, []);

    return (
        <div className="container flex flex-col gap-5">
            {/* Hero Section */}
            {!isLoading && !isError && articleData?.data?.data && (
                <div className="flex flex-col gap-8">
                    <h1 className='text-3xl font-extrabold lg:text-4xl'>{articleData.data.data.title}</h1>
                    <div className="flex gap-2 items-center text-sm font-medium">
                        <p>Last updated: {formatDate(articleData.data.data.updated_at)}</p>
                        <div className="h-full w-[1px] bg-gray-400"></div>
                        <p>By {articleData.data.data.author.name}</p>
                    </div>
                </div>
            )}

            {/* Main content wrapper */}
            <div className="relative flex flex-col lg:flex-row justify-between gap-4">
                {/* Table of content for mobile */}
                {!isLoading && !isError && articleData?.data?.data?.headings?.length > 0 && (
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
                    {/* Search bar */}
                    {/* <div className="mb-6 relative">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search in article..."
                                className="pl-10 pr-4 py-2 border rounded-lg w-full"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        {matches.length > 0 && (
                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span>{activeMatch + 1} of {matches.length} matches</span>
                                <button
                                    onClick={handlePrevMatch}
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNextMatch}
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                        {searchTerm && matches.length === 0 && (
                            <div className="text-sm text-gray-500 mt-2">
                                No matches found for "{searchTerm}"
                            </div>
                        )}
                    </div> */}

                    {isLoading ? (
                        <div className="loading-state flex justify-center">
                            <div className="animate-spin h-5 w-5 rounded-full border-e-2 border-hoverText" size={18}></div>
                        </div>
                    ) : isError ? (
                        <div className="error-state">Error loading article: {error.message}</div>
                    ) : (
                        <div
                            ref={contentRef}
                            className="content !ms-0 !ps-0"
                            dangerouslySetInnerHTML={{ __html: articleData?.data?.data?.content || '' }}
                        />
                    )}
                </div>

                {/* Sticky sidebar with table of contents */}
                {!isLoading && !isError && articleData?.data?.data?.headings?.length > 0 && (
                    <div className="w-full lg:w-1/4 lg:block">
                        <div className="sticky top-[84px]">
                            {/* Headings navigation */}
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
            {!isLoading && !isError && articleData?.data?.data && (
                <>
                    <div className="w-full h-[1px] bg-gray-300 mt-10"></div>
                    <div className="flex justify-between items-center py-4">
                        <div className="flex flex-col">
                            <h3 className='font-extrabold'>By {articleData.data.data.author.name}</h3>
                            <p className="text-sm text-gray-600">Last updated: {formatDate(articleData.data.data.updated_at)}</p>
                        </div>
                        <div className="flex items-center gap-4 text-xl text-gray-700">
                            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                            <FaPinterest className="hover:text-red-600 cursor-pointer" />
                            <FaBehanceSquare className="hover:text-blue-800 cursor-pointer" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}