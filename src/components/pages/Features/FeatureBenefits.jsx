import React from 'react'

export default function FeatureBenefits({ items, title }) {
    return <>
        <div className="bg-[#131e57] py-10">
            <div className="container flex flex-col gap-10 items-center" data-aos="fade-up" data-aos-offset="200">
                <div className="text-center text-2xl lg:text-5xl leading-[133%] font-extrabold text-white">{title}</div>
                <div className="flex flex-wrap gap-5">
                    {items.map((i) => (
                        <div
                            key={i.id}
                            className="w-full lg:w-[calc(50%-10px)] bg-[#1d2861] rounded-2xl p-5 pb-12 flex"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay={i.id * 100}
                        >
                            <div className="w-24 lg:w-16 text-hoverText text-2xl">{i.icon}</div>
                            <div className="flex flex-col">
                                <div className="text-sm lg:text-xl text-white font-bold">{i.title}</div>
                                <div className="text-base text-white font-medium mt-2">
                                    {i.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}
