import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Video() {
    const { slug } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['video', slug],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/webinars/videos/${slug}`)
        }
    })

    // Construct the full video URL for non-YouTube videos
    const getVideoUrl = () => {
        if (!data?.data?.data?.video_url) return '';
        if (data.data.data.type === 'youtube') return '';

        // Ensure the URL is properly constructed
        let videoPath = data.data.data.video_url;

        // Remove leading slash if present to avoid double slashes
        if (videoPath.startsWith('/')) {
            videoPath = videoPath.substring(1);
        }

        return `https://api.propxpro.com/storage/${videoPath}`;
    }

    return (
        <>
            <div className="container">
                <Link to={'/webinars'} className='text-hoverText font-bold text-lg'>Webinars</Link>
                <h2 className='font-extrabold text-3xl'>
                    {data?.data?.data?.title}
                </h2>
                <div className="mt-8">
                    {data?.data?.data?.type === 'youtube' ? (
                        <iframe
                            className='h-[calc(100vh-100px)] w-full'
                            src={`https://www.youtube.com/embed/${data?.data?.data?.video_url.split('?')[0].split('e/')[1]}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="relative h-[calc(100vh-100px)] w-full bg-black">
                            <video
                                controls
                                className="h-full w-full object-contain"
                                autoPlay
                                playsInline
                                key={getVideoUrl()} // Force re-render when URL changes
                            >
                                <source src={getVideoUrl()} type="video/mp4" />
                                {/* <source src={getVideoUrl()} type="video/webm" />
                                <source src={getVideoUrl()} type="video/ogg" /> */}
                                Your browser does not support the video tag.
                            </video>
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    Loading video...
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}