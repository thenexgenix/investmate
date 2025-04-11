import React from 'react'
import banner from "../../../assets/banner.png"

export const Banner = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                    <img
                        src={banner}
                        className="max-w-sm  rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Empower Your <br /> Investments with Our <br /> Platform</h1>
                        <p className="py-6">
                            Discover a unique crowdfunding platform designed for ethical <br />   investing. Explore Shariah-compliant projects that align with your <br /> values and financial goals.
                        </p>
                        <div>
                            <button className="btn btn-primary border-none bg-[#00B67A]">Explore</button>
                            <button className="btn btn-primary border-black bg-white mx-3 text-black">Learn More</button>
                        </div>
                        <div className='mt-10'>
                            <div className="stats shadow">
                                <div className="stat">
                                    
                                    <div className="stat-value">4000+</div>
                                    <div className="stat-desc">Signature every hours</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat">
                                    
                                    <div className="stat-value">200+</div>
                                    <div className="stat-desc">Victory each month</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat">
                                    
                                    <div className="stat-value">10M+</div>
                                    <div className="stat-desc">Fundraised per year</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
