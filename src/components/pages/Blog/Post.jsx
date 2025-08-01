import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBehanceSquare, FaCaretDown, FaChevronRight } from 'react-icons/fa';
import { FaFacebook, FaPinterest, FaTwitter, FaUser } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import RelatedBlogs from './RelatedBlogs';
import { ChevronDown, HelpCircle } from 'lucide-react';
import RecentBlogs from './RecentBlogs';


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export function HeroSection({ data, view }) {
  const [readingTime, setReadingTime] = useState(null);



  function calcTimeToRead(content) {
    if (!content) return 1;

    // Option 1: Calculate from HTML content (strip HTML tags)
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordsCount = textContent.split(' ').filter(word => word.length > 0).length;

    const WPM = 200; // Average reading speed
    const readingTime = wordsCount / WPM;
    return Math.max(1, Math.ceil(readingTime));
  }

  // Calculate reading time when data changes
  useEffect(() => {
    if (data?.content) {
      const time = calcTimeToRead(data.content);
      setReadingTime(time);
    }
  }, [data?.content]);

  // Alternative: Calculate from DOM after content is rendered
  useEffect(() => {
    if (view && data) {
      const timer = setTimeout(() => {
        const contentElement = document.getElementById('blog-content-container');
        if (contentElement && contentElement.innerText) {
          const wordsCount = contentElement.innerText.split(' ').filter(word => word.length > 0).length;
          const WPM = 200;
          const time = Math.max(1, Math.ceil(wordsCount / WPM));
          setReadingTime(time);
        }
      }, 100); // Small delay to ensure DOM is ready

      return () => clearTimeout(timer);
    }
  }, [view, data]);

  return <>
    {view && <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2 font-bold">
        <span className='text-hoverText capitalize'>{data?.category}</span>
        <h1 className='lg:text-[54px] text-3xl font-extrabold lg:leading-[67px] '>{data?.title}</h1>
        <p>By {data?.author.name}</p>
        <div className="flex gap-2 items-center text-sm font-medium mt-3">
          <p className=''>
            {readingTime !== null ? `${readingTime} minutes read` : 'Loading...'}
          </p>
          <div className="h-full w-[1px] bg-gray-400">  <br /> </div>
          <p>Published {formatDate(data?.created_at)}</p>
          <div className="h-full w-[1px] bg-gray-400">  <br /> </div>
          <p>Updated {formatDate(data?.updated_at)}</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="flex justify-center">
          <img src={data?.cover_photo} alt='cover photo' title={data?.title} content={data?.title} className='w-full' />
        </div>
      </div>
    </div>}
  </>
}


export function FAQs({ faqs }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  if (!faqs || faqs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Available</h3>
          <p className="text-gray-500">Check back later for frequently asked questions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our services and policies
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(faq.id);
          return (
            <div
              key={faq.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default function Post() {
  const { id } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tableOfContent, setTableOfContent] = useState(false);

  const navigate = useNavigate()

  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: [`post-${id}`],
    queryFn: () => {
      return axios.get(`https://api.propxpro.com/api/landing/blogs/${id}`)
    }
  })

  // Function to handle smooth scrolling with offset
  const scrollToHeading = (headingId, event) => {
    event.preventDefault();
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

  useEffect(() => {
    console.log(post?.data?.data);
  }, [post])

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.getElementById('blog-content-container');
      if (!contentElement) return;

      const contentRect = contentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const contentHeight = contentElement.offsetHeight;

      // Calculate how much of the content has been scrolled past
      const scrolled = Math.max(0, -contentRect.top);
      const maxScroll = contentHeight - windowHeight + contentRect.top + window.pageYOffset;

      // Calculate progress as a percentage
      const progress = Math.min(100, Math.max(0, (scrolled / Math.max(1, maxScroll)) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [post?.data?.data]);

  return <>
    {/* progress bar */}
    <div className="sticky lg:top-[84px] top-[81px] z-10">
      <div className="">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-lightBlue h-2 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
    {/* breedcrumb */}
    <div className="bg-gray-200">
      <div className="container !py-5 flex flex-wrap items-center gap-3">
        <span className='hover:text-hoverText hover:underline cursor-pointer text-grayText text-opacity-80' onMouseDown={(e) => { e.stopPropagation(); navigate(`/blog`) }}> Blogs</span>
        <FaChevronRight size={10} />
        <span className='hover:text-hoverText hover:underline cursor-pointer text-grayText text-opacity-80' onMouseDown={(e) => { e.stopPropagation(); navigate(`/blog/all-posts`) }}> All posts</span>
        <FaChevronRight size={10} />
        <span className='cursor-pointer text-grayText text-opacity-100' > {post?.data?.data?.title}</span>
      </div>
    </div>
    <div className="container flex flex-col gap-5">

      <HeroSection key={post?.data?.data} data={post?.data?.data} view={!isLoading && !isError} />

      {/* Main content wrapper with relative positioning */}
      <div className="relative">
        {/* progress */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* table of content */}
          {!isLoading && !isError && <div className="lg:hidden">
            <button className="font-semibold text-gray-800  bg-white flex justify-between w-full items-center hover:text-lightBlue" onClick={() => { setTableOfContent(!tableOfContent) }}>
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
                  {post?.data?.data?.headings?.map((h, i) => (
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
          </div>}
          {/* content */}
          <div className="lg:w-3/4">
            <div className="content-container !ms-0 !ps-0" id='blog-content-container'>

              {isLoading ? (
                <div className="loading-state"><div className="animate-spin h-5 w-5 rounded-full border-e-2 border-hoverText m-auto" size={18} ></div></div>
              ) : error ? (
                <div className="error-state">Error loading post: {error.message}</div>
              ) : (
                <div
                  className="content "
                  dangerouslySetInnerHTML={{ __html: post?.data?.data?.content || '' }}
                />
              )}
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {post?.data?.data?.tags?.map((t, index) => (
                <div key={index} className="border rounded-lg py-1 px-2 text-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Sticky headings sidebar */}
          {true && <div className="w-1/4 lg:block hidden">
            <div className="sticky top-[84px]">
              {/* Headings navigation */}
              <div className="flex flex-col gap-2 max-h-[calc(100vh-150px)] overflow-y-auto">
                <h4 className="font-semibold text-gray-800 mb-2 sticky top-0 bg-white pt-5 pb-2">
                  Table of Contents
                </h4>
                {post?.data?.data?.headings?.map((h, i) => (
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
          </div>}
        </div>
      </div>

      {/* blog footer */}
      {!isLoading && !isError && <>
        <div className="w-full h-[1px] bg-gray-300 mt-10"></div>
        {/* <p className='text-xs font-semibold'>modified at: {formatDate(post?.data?.data?.created_at)}</p> */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 aspect-square rounded-full">
                <img src={post?.data?.data?.author?.profile_photo} alt={post?.data?.data?.author?.name} />
              </div>
              <h3 className='font-extrabold'>{post?.data?.data?.author?.name}</h3>
            </div>
            <p className='text-xs'> {post?.data?.data?.author?.bio} </p>
          </div>
          <div className="flex items-center gap-4 text-xl text-gray-700">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaBehanceSquare />
          </div>
        </div></>}

      {post?.data?.data?.faqs && <FAQs faqs={post?.data?.data?.faqs} />}
      {post?.data?.data?.id && <RelatedBlogs id={post?.data?.data?.id} title={'Related blogs'} />}
      {post?.data?.data?.id && <RecentBlogs id={post?.data?.data?.id} title={'Recent blogs'} />}


    </div>

  </>
}