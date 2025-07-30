import React from 'react'
import BlogCard from './BlogCard'
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function RelatedBlogs({ id, title }) {

    const { data: RelatedBlogsData, isLoading, isError, error } = useQuery({
        queryKey: [`${id}-RelatedBlogs`],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/landing/blogs/${id}/related`)
        }
    })



    return <>
        <div className="container flex flex-col gap-5" data-aos="fade-up">
            <div className="flex justify-between">
                <h2 className='font-bold text-2xl lg:text-3xl'>Latest posts</h2>
                <NavLink to={"/blog/all-posts"} className="flex gap-2 items-center font-bold text-sm">
                    View all <IoIosArrowRoundForward />
                </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 h-full">
                {RelatedBlogsData?.data?.data?.slice(0, 3).map((i, index) => (<>
                    <BlogCard blog={i} />
                </>))}
            </div>
        </div>
    </>
}