import React from 'react'

export default function StayConnected() {
    return <>
        <div className="bg-[#245ec1] py-10">
            <div className="container flex flex-col gap-10 items-center" >
                <div className="text-center text-3xl lg:text-5xl leading-[133%] font-extrabold text-white lg:px-44">Stay connected</div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-white  lg:px-80">Subscribe to our newsletter to stay updated and secure better deals—never miss an opportunity again!</div>
                <form className='flex gap-5 items-center lg:w-1/2 w-full'>
                    <input type="text" placeholder="Email address" className='py-3 px-5 rounded-lg flex-1  hover:scale-[1.01] transition-all' />
                    <button type='submit' className='bg-white font-bold py-3 px-5 rounded-lg hover:scale-[1.03] transition-all'>Submit</button>
                </form>
            </div>
        </div>
    </>
}
