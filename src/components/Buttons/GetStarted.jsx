import React from 'react';

export default function GetStarted({ mode = 'default', className = '' }) {
    const handleClick = () => {
        window.open('https://dev.vtech-upgraded.com/signup', '_blank');
    };

    if (mode === 'default') {
        return (
            <button
                onClick={handleClick}
                className={`bg-lightBlue text-white h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold hover:shadow-lg hover:bg-[#1e4c9d] hover:scale-[1.005] transition-all ${className}`}
            >
                Get Started
            </button>
        );
    } else {
        return (
            <button
                onClick={handleClick}
                className={`bg-transparent text-black border-2 border-black h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold hover:shadow-lg hover:scale-[1.005] transition-all ${className}`}
            >
                Get Started
            </button>
        );
    }
}