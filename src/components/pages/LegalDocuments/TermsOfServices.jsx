import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './Content.scss'
import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function TermsOfServices() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['terms-of-services'],
        queryFn: () => {
            return axios.get('https://api.propxpro.com/api/legal-documents/terms-of-service')
        }
    })

    return (<>
        <div className="container flex flex-col gap-8">
            <h1 className='text-center font-extrabold text-4xl'>Terms of Services</h1>
            <div className="content-container">

                {isLoading ? (
                    <div className="loading-state"><div className="animate-spin h-5 w-5 rounded-full border-e-2 border-hoverText m-auto" size={18} ></div></div>
                ) : error ? (
                    <div className="error-state">Error loading terms of services: {error.message}</div>
                ) : (
                    <div
                        className="content bg-[#f6f6f9] rounded-xl p-10"
                        dangerouslySetInnerHTML={{ __html: data?.data?.data?.content || '' }}
                    />
                )}
            </div>
        </div>
    </>
    )
}