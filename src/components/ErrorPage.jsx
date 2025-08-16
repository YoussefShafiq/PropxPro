import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleRefresh = () => {
        window.location.reload();
    };
    return <>
        <Navbar />
        <div className={`transition-all relative container min-h-[500px] flex flex-col justify-center items-center`}>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an unexpected error has occurred.</p>
            <div className="flex gap-2 my-4">
                <button onClick={handleRefresh} className='bg-hoverText text-white  py-1 px-2 rounded-lg' >Refresh</button>
                <button onClick={() => navigate('/')} className='bg-hoverText text-white  py-1 px-2 rounded-lg' >Go to home</button>
            </div>
        </div>
        <Footer />
    </>


};

export default ErrorPage;