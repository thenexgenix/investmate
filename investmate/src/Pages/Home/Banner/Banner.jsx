import React from 'react'
import banner from "../../../assets/banner.png"

// Banner component displaying hero section with image, text, buttons, and stats
export const Banner = () => {
    return (
        <>
            {/* Hero section container with background and full screen height */}
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                    {/* Banner image shown on the right in large screens */}
                    <img
                        src={banner}
                        className="w-full lg:max-w-sm rounded-lg"
                        alt="Investment banner"
                    />
                    
                    {/* Text content area */}
                    <div>
                        <h1 className="text-5xl font-bold">
                            Empower Your <br /> Investments with Our <br /> Platform
                        </h1>
                        <p className="py-6">
                            Discover a unique crowdfunding platform designed for ethical <br />
                            investing. Explore Shariah-compliant projects that align with your <br />
                            values and financial goals.
                        </p>

                        {/* Call-to-action buttons */}
                        <div>
                            <button className="btn btn-primary border-none bg-[#00B67A]">
                                Explore
                            </button>
                            <button className="btn btn-primary border-black bg-white mx-3 text-black">
                                Learn More
                            </button>
                        </div>

                        {/* Statistics section */}
                        <div className='mt-10'>
                            {/* Stat: Signature every hour */}
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-value">4000+</div>
                                    <div className="stat-desc">Signature every hours</div>
                                </div>
                            </div>

                            {/* Stat: Victories each month */}
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-value">200+</div>
                                    <div className="stat-desc">Victory each month</div>
                                </div>
                            </div>

                            {/* Stat: Funds raised annually */}
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
