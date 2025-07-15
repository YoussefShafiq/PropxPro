import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { FaBehanceSquare } from 'react-icons/fa';
import { FaFacebook, FaPinterest, FaTwitter, FaUser } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: [`post-${id}`],
    queryFn: () => {
      return axios.get(`https://propxpro.run.place/api/landing/blogs/${id}`)
    }
  })

  useEffect(() => {
    console.log(post?.data?.data);
  }, [post])


  return <>

    <div className="container flex flex-col gap-5">
      {/* date and category */}
      <div className="flex gap-2 items-center font-bold">
        <p className='text-hoverText'>{post?.data?.data?.category}</p>
        <div className="h-full w-[1px] bg-gray-400">  <br /> </div>
        <p>{post?.data?.data?.updated_at.substring(0, 10)}</p>
      </div>

      {/* title */}
      <h1 className='text-[54px] font-extrabold leading-[67px]'>{post?.data?.data?.title}</h1>

      {/* user */}
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-gray-300 flex justify-center items-center rounded-full">
          <FaUser size={20} />
        </div>
        <div className="flex flex-col">
          <p className='font-bold'>{post?.data?.data?.created_by_name}</p>
          <p className='text-opacity-80 text-sm'>{post?.data?.data?.updated_at.substring(0, 10)}</p>
        </div>
      </div>

      {/* cover */}
      <div className="max-h-screen flex justify-center">
        <img src={post?.data?.data?.cover_photo_url} alt={post?.data?.data?.title} className='max-w-full' />
      </div>

      <div className="content-container">

        {isLoading ? (
          <div className="loading-state"><div className="animate-spin h-5 w-5 rounded-full border-e-2 border-hoverText m-auto" size={18} ></div></div>
        ) : error ? (
          <div className="error-state">Error loading privacy policy: {error.message}</div>
        ) : (
          <div
            className="content "
            dangerouslySetInnerHTML={{ __html: post?.data?.data?.content || '' }}
          />
        )}
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-3">
        {post?.data?.data?.tags.map((t, index) => (<>
          <div className="border rounded-lg py-1 px-2 text-sm">
            {t}
          </div>
        </>))}
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-10"></div>

      {/* blog footer */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className='font-extrabold'>By {post?.data?.data?.created_by_name}</h3>
          <p className='text-sm text-[#5A6479]'>Admin</p>
        </div>
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaBehanceSquare />
        </div>
      </div>


    </div>

  </>
}
