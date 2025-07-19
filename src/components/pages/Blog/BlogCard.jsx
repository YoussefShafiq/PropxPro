import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({ blog: i, grid = false }) {
    const navigate = useNavigate()

    return <>
        <div className={`w-full lg:w-[calc(33%-10px)]  bg-white border rounded-2xl flex flex-col`} onClick={() => navigate(`/blog/post/${i.id}`)} >
            <div className="rounded-xl h-full">
                <div className="bg-black rounded-[13px] h-full flex flex-col">
                    <div className="relative bg-white min-h-96 flex flex-col gap-3 h-full border rounded-xl transition-all cursor-pointer hover:-translate-x-1.5 hover:-translate-y-1.5">
                        <div className="w-full text-hoverText text-2xl h-60 overflow-hidden object-cover">
                            <img src={i.cover_photo_url} className='rounded-xl rounded-b-none object-cover h-60 m-auto' alt={i.title} />
                        </div>
                        <div className="flex flex-col gap-3 p-5 h-full flex-1">
                            <div className="flex gap-2 items-center font-bold">
                                <p className='text-hoverText'>{i.category}</p>
                                <div className="h-5 w-[1px] bg-hoverText"></div>
                                <p>{i.updated_at.substring(0, 10)}</p>
                            </div>
                            <div className="text-sm lg:text-xl font-bold">{i.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
