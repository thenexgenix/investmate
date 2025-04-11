import React from 'react'
import returnBanner from "../../../assets/returnbanner.png"
import returnIcon1 from "../../../assets/rerturnIcon1.png"
import returnIcon2 from "../../../assets/rerturnIcon2.png"
import returnIcon3 from "../../../assets/rerturnIcon3.png"

export const Return = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-full flex-col lg:flex-row !justify-around">
                    <img
                        src={returnBanner}
                        className="max-w-sm rounded-lg " />
                    <div>
                        <p className='text-[#0CA750]'>Returns</p>
                        <h1 className="text-5xl font-bold">Fuel Innovation & <br /> Secure Your Returns</h1>
                        <p className="py-6">
                            Invest in innovation and secure your future. Our platform offers <br />equity, revenue-sharing, and profit-driven models, ensuring your  <br />investments grow alongside visionary ideas.
                        </p>
                        <div className='flex mx-2  flex-col  justify-around gap-5 my-10'>
                            <div className='flex gap-6'>
                                <img src={returnIcon1} alt="" />
                                <div>
                                    <h1 className='font-bold text-xl'>Equity-Based Sharing </h1>
                                    <p>Own a stake in the next big idea.</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <img src={returnIcon2} alt="" />
                                <div>
                                    <h1 className='font-bold text-xl'>Revenue Sharing</h1>
                                    <p>Earn from real business success.</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <img src={returnIcon3} alt="" />
                                <div>
                                    <h1 className='font-bold text-xl'>Profit-Driven Returns</h1>
                                    <p>Share in the journey, reap the rewards.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
