import React from 'react'
import JoinUsSectionBanner from "../../../assets/JoinusBanner.png"
import joinUsSectionIcon1 from "../../../assets/joinUsIcon1.png"
import joinUsSectionIcon2 from "../../../assets/joinUsIcon2.png"

export const JoinUs = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse !justify-around gap-20">
                    <img
                        src={JoinUsSectionBanner}
                        className="w-full lg:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl my-10 font-bold">Almost Is Never Enough <br /> <span className='text-[#00B67A]'>Unless</span> You Act Today!</h1>
                        <hr />
                        <div className='flex   flex-col  justify-around gap-5  my-10'>
                            <div className='flex  gap-5'>
                                <img className='w-6 h-6' src={joinUsSectionIcon1} alt="" />
                                <div>
                                    <h1 className='font-bold text-xl'>Global Community  </h1>
                                    <p >Reach a community that can makes us strong and useful</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <img className='w-6 h-6' src={joinUsSectionIcon2} alt="" />
                                <div>
                                    <h1 className='font-bold text-xl'>Crowdfunding</h1>
                                    <p>Empowering Founders, Engaging Communities.</p>
                                </div>
                            </div>


                        </div>
                        <div className="avatar-group -space-x-6 w-fit p-3 rounded-full" style={{
                            background:
                                "linear-gradient(4.22deg, rgb(0, 182, 122) -91.818%, rgb(46, 116, 236) -63.532%, rgb(0, 182, 122) 12.024%, rgb(46, 116, 236) 134.09%)",
                        }}>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar bg-[#2E74EC] avatar-placeholder">
                                <div className=" text-neutral-content w-12">
                                    <span>4K+</span>
                                </div>
                            </div>
                        </div>
                        <progress className="progress !text-[#2E74EC] w-full" value={78} max="100"></progress>
                    </div>
                </div>
            </div>
        </>
    )
}
