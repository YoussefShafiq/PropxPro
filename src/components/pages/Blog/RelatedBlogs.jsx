import React from 'react'
import BlogCard from './BlogCard'
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function RelatedBlogs({ id, title = 'Latest posts' }) {

    const { data: RelatedBlogsData, isLoading, isError, error } = useQuery({
        queryKey: [`${id}-RelatedBlogs`],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/landing/blogs/${id}/related`)
        }
    })



    return <>
        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>{title}</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 h-full">
                {(RelatedBlogsData?.data?.data?.length == 0) && <div className='text-center w-full'>No {title} found</div>}
                {isLoading ?
                    <>
                        <div className="flex gap-5 w-full">
                            {[1, 2, 3].map((i) => (<>
                                <div className="w-1/3 h-96 bg-gray-100 animate-pulse rounded-xl"></div>
                            </>))}
                        </div>
                    </>
                    :
                    RelatedBlogsData?.data?.data?.slice(0, 3).map((i, index) => (<>
                        <BlogCard blog={i} />
                    </>))
                }
            </div>
        </div>
    </>
}