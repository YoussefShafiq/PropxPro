import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Category() {
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const navigate = useNavigate();

    const { data: categoryData, isLoading, isError, error } = useQuery({
        queryKey: [`category${id}`],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/help-center/category/${id}`)
        }
    });

    useEffect(() => {
        if (categoryData?.data?.data) {
            const originalData = categoryData.data.data;

            if (searchTerm.trim() === '') {
                setFilteredData(originalData);
            } else {
                // Filter the data based on search term
                const filtered = {
                    ...originalData,
                    subcategories: originalData.subcategories.map(subcategory => ({
                        ...subcategory,
                        topics: subcategory.topics.filter(topic =>
                            topic.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                    })).filter(subcategory => subcategory.topics.length > 0) // Remove empty subcategories
                };
                setFilteredData(filtered);
            }
        }
    }, [categoryData, searchTerm]);

    const categoriesColors = [
        'bg-rose-100',
        'bg-orange-100',
        'bg-sky-100',
        'bg-green-100',
        'bg-cyan-100',
        'bg-violet-100',
        'bg-teal-100'
    ];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (isLoading) return <div className="container">Loading...</div>;
    if (isError) return <div className="container">Error: {error.message}</div>;

    return <>
        {/* breedcrumb */}
        <div className="bg-gray-200">
            <div className="container !py-5 flex flex-wrap items-center gap-3">
                <span className='hover:text-hoverText hover:underline cursor-pointer text-grayText text-opacity-80' onMouseDown={(e) => { e.stopPropagation(); navigate(`/help-center`) }}> PropXPro help center</span>
                {filteredData && <><FaChevronRight size={10} /> <span className='' > {filteredData.name}</span></>}
            </div>
        </div>

        <div className="container">
            <div className="flex justify-between items-center flex-wrap gap-4 py-6">
                <div className="flex flex-col gap-3">
                    <h1 className='font-extrabold text-3xl lg:text-4xl'>{filteredData?.name}</h1>
                    <h1>{filteredData?.description}</h1>
                </div>
                <div className="relative w-full lg:w-64">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="pl-10 pr-4 py-2 border rounded-lg w-full lg:w-64 bg-gray-50"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
            </div>

            {filteredData?.subcategories?.length > 0 ? (
                <div className="flex flex-wrap">
                    {filteredData.subcategories.map((s, i) => (
                        <div key={s.id} className="w-full md:w-1/2 p-8 ps-0">
                            <div className="flex justify-start items-center gap-4">
                                <div className="w-11">
                                    <div className="w-10 h-10 relative rounded-lg bg-black">
                                        <div className={`w-10 h-10 absolute bottom-1 right-1 rounded-lg ${categoriesColors[i % categoriesColors.length]} border-2 border-black`}></div>
                                    </div>
                                </div>
                                <h3 className='font-extrabold text-xl lg:text-3xl w-full'>{s.name}</h3>
                            </div>
                            <ul className='pt-2 flex flex-col gap-2'>
                                {s.topics.map((t) => (
                                    <li key={t.id}>
                                        <Link
                                            to={`/help-center/${t.slug}`}
                                            className='text-hoverText hover:underline cursor-pointer font-semibold'
                                        >
                                            {t.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-10 text-center">
                    <p className="text-lg">No topics found matching your search.</p>
                </div>
            )}
        </div>
    </>
}