import React from 'react';

export default function GetStarted({ mode = 'default', className = '' }) {
    const handleClick = () => {
        window.open('https://dev.vtech-upgraded.com/signup', '_blank');
    };

    if (mode === 'default') {
        return (
            <div className={`relative bg-black h-[56px] w-full lg:w-[182px] ${className} rounded-lg`}>
                <button
                    onClick={handleClick}
                    className={`absolute left-0 hover:-translate-x-1.5 hover:-translate-y-1.5  hover:border-black border-[2px] border-transparent bg-lightBlue text-white h-[56px] w-full lg:w-[182px] rounded-lg lg:text-xl font-semibold  transition-all duration-300 ${className}`}
                >
                    Get Started
                </button>
            </div>
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