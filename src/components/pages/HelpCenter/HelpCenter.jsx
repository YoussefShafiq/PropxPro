import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Plane } from 'lucide-react';
import React, { useState, KeyboardEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import ReadyToTransform from '../ReusableSections/ReadyToTransform';
import { FaChevronRight } from 'react-icons/fa';

export function HeroSection({ onSearchSubmit, searchQuery, setSearchQuery }) {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const navigate = useNavigate()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['helpArticles', searchQuery],
        queryFn: () => fetchHelpArticles(searchQuery),
        enabled: searchQuery.length > 0 && isSearchFocused,
    });

    const floatingResults = Array.isArray(data) ? data : [];

    const highlightMatch = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ?
                <strong key={index} className="font-extrabold">{part}</strong> :
                part
        );
    };

    async function fetchHelpArticles(searchQuery) {
        const response = await axios.get(`https://api.propxpro.com/api/help-center/search?q=${searchQuery}`);
        return response.data.data || [];
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearchSubmit(searchQuery);
            // setIsSearchFocused(false);
        }
    };

    return (
        <div className="bg-helpcenter bg-cover bg-center flex justify-center items-center min-h-[400px]">
            <div className="container flex flex-col justify-center items-center w-full max-w-2xl px-4">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-[#19243B] mb-8">How can we help?</h1>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 10)}
                        onKeyDown={handleKeyDown}
                        className="w-full py-3 pl-10 pr-4 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    />

                    {(isSearchFocused && searchQuery.length > 0) && (
                        <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
                            {isLoading ? (
                                <div className="p-4 text-gray-500">Searching...</div>
                            ) : isError ? (
                                <div className="p-4 text-red-500">Error fetching results</div>
                            ) : floatingResults.length === 0 ? (
                                <div className="p-4 text-gray-500">No results found</div>
                            ) : (
                                <ul>
                                    {floatingResults.map((article) => (
                                        <li key={article.id} className="border-b border-gray-100 last:border-b-0">
                                            <div
                                                onMouseDown={(e) => { e.stopPropagation(); navigate(`/help-center/${article.slug}`) }}
                                                to={`/help-center/category/${article.id}`}
                                                className="block p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                                            >
                                                <h3 className="font-medium text-hoverText">
                                                    {highlightMatch(article.title, searchQuery)}
                                                </h3>
                                                <div className="flex items-center gap-2 text-xs text-[#5A6479]">
                                                    <span>PropXpro</span>
                                                    {article.category && <><FaChevronRight size={10} /> <span className='hover:text-hoverText hover:underline' onMouseDown={(e) => { e.stopPropagation(); navigate(`/help-center/category/${article.category.id}`) }}> {article.category.name}</span></>}
                                                    {article.subcategory && <><FaChevronRight size={10} /><span className='hover:text-hoverText hover:underline' onMouseDown={(e) => { e.stopPropagation(); navigate(`/help-center/subcategory/${article.category.id}`) }}>{article.subcategory.name}</span></>}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Categories({ searchQuery, setSearchQuery }) {
    const navigate = useNavigate()
    const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
        queryKey: ['helpcenter-categories'],
        queryFn: () => axios.get('https://api.propxpro.com/api/help-center')
    });

    const { data: searchData, isLoading: searchLoading } = useQuery({
        queryKey: ['helpcenter-search-results', searchQuery],
        queryFn: () => searchQuery ? axios.get(`https://api.propxpro.com/api/help-center/search?q=${searchQuery}`) : null,
        enabled: !!searchQuery
    });

    const displayData = searchQuery ? searchData?.data?.data : categoriesData?.data?.data;
    const isLoading = searchQuery ? searchLoading : categoriesLoading;

    if (isLoading) return <div className="container text-center flex flex-col lg:flex-row gap-5">
        {[...Array(2)].map(() => (<>
            <div className="w-full lg:w-1/2 h-44 bg-gray-100 animate-pulse rounded-xl"></div>
        </>))}
    </div>;

    return (
        <div className="bg-[#f6f6f9] py-14">
            <div className="container flex flex-wrap gap-4 py-8">
                {displayData?.length ? (
                    displayData.map((item) => (
                        <>
                            {searchQuery ? <>
                                <div key={item.id} className="w-[calc(80%-8px)] m-auto bg-white flex gap-2 p-5 rounded-lg">
                                    <div className="flex flex-col gap-2 cursor-pointer" onClick={() => navigate(`/help-center/category/${item.id}`)}>
                                        <h3 className='font-bold lg:text-xl text-hoverText'>{item.name || item.title}</h3>
                                        <p className='font-medium'>{item.description || item.content?.replace(/<[^>]*>/g, '').substring(0, 100)}</p>
                                        <div className="flex items-center gap-2 text-xs text-[#5A6479]">
                                            <span>PropXpro</span>
                                            {item.category && <><FaChevronRight size={10} /> <span className='hover:text-hoverText hover:underline' onMouseDown={(e) => { e.stopPropagation(); navigate(`/help-center/category/${item.category.id}`) }}> {item.category.name}</span></>}
                                            {/* {item.subcategory && <><FaChevronRight size={10} /><span className='hover:text-hoverText hover:underline' >{item.subcategory.name}</span></>} */}
                                        </div>
                                    </div>
                                </div>
                            </> : <>
                                <div key={item.id} onClick={() => navigate(`/help-center/category/${item.id}`)} className="lg:w-[calc(50%-8px)] w-full bg-white flex gap-2 p-5 rounded-lg cursor-pointer">
                                    <div className="text-hoverText">
                                        <Plane />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className='font-bold lg:text-xl'>{item.name || item.title}</h3>
                                        <p className='font-medium'>{item.description || item.content?.replace(/<[^>]*>/g, '').substring(0, 100)}</p>
                                        {item.slug && (
                                            <Link
                                                to={`/help-center/${item.slug}`}
                                                className="text-hoverText text-sm font-medium"
                                            >
                                                Read more
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </>}
                        </>
                    ))
                ) : (
                    <div className="w-full text-center py-8">
                        {searchQuery ? <>
                            <h2 className='text-3xl font-extrabold mb-2' >No result found</h2>
                            <p className='text-sm'>Try searching another keyword. <Link onClick={() => { setSearchQuery(''); setSubmittedQuery('') }} to={'/help-center'} className='text-hoverText underline'>Browse help center</Link></p>
                        </> : 'No categories available'}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    return (
        <>
            <HeroSection
                onSearchSubmit={setSubmittedQuery}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <Categories searchQuery={submittedQuery} setSearchQuery={setSearchQuery} setSubmittedQuery={setSubmittedQuery} />
            <ReadyToTransform />
        </>
    );
}