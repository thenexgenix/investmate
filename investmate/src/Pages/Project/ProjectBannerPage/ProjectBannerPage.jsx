import React from 'react'
import ProjectSectionBanner from "../../../assets/projectPageBanner.png"
import SecureIcon from "../../../assets/secure.png"
import donationIcon from "../../../assets/donationIcon.png"
import growthIcon from "../../../assets/logos_growth-book-icon.png"
import { FaRegStar } from 'react-icons/fa'

export const ProjectBannerPage = () => {
    return (
        <>
            <h1 className='font-semibold text-5xl mt-14'>Innovative Green Initiative</h1>
            <div className='flex flex-col lg:flex-row justify-between gap-20 my-8'>
                <div className='  rounded-2xl w-full '>
                    <img src={ProjectSectionBanner} alt="" />
                    <div className='w-fit p-2 border border-[#12523D] bg-[#CEF3BD] flex gap-2 rounded-full my-2'>
                        <img src={SecureIcon} alt="" className='w-6 h-6' /> <span className='text-[#12523D]'>Donation protected</span>
                    </div>
                    <hr />
                    <div className='my-2'>
                        <div className='flex gap-5'>
                            <button className="btn border border-none border-b-[#00B67A] bg-transparent btn-success">Description</button>
                            <button className="btn border border-none border-b-[#00B67A] bg-transparent btn-success">updates</button>
                        </div>
                        <div className='my-5'>
                            <p>This project aims to revolutionize the renewable energy sector by developing innovative solar panel technology. Our objective is to provide affordable and efficient energy solutions to underserved communities, reducing their reliance on fossil fuels and promoting sustainability. <br /> <br />

                                The potential impact of this initiative is significant. By harnessing solar energy, we can decrease energy costs for families, create job opportunities in installation and maintenance, and contribute to a cleaner environment. Our team is committed to making a difference, ensuring that our solutions are accessible and effective. <br /> <br />

                                Led by a group of experienced engineers and environmentalists, our team brings a wealth of knowledge and expertise to the project. We have collaborated with local organizations to understand the specific needs of the communities we aim to serve, ensuring that our approach is both practical and impactful. <br /> <br />

                                We believe that through community engagement and education, we can empower individuals to take charge of their energy needs. Our project includes workshops and training sessions to equip locals with the skills necessary for installation and upkeep of solar systems. <br /> <br />

                                Join us in this transformative journey towards a sustainable future. Together, we can create a lasting impact that benefits both people and the planet. <br /><br />

                                https://www.Facebook.org/site/Investmate
                            </p>

                        </div>
                        <div className='flex gap-2  my-5'>
                            <button className="btn btn-neutral btn-outline w-1/2">Invest Now</button>
                            <button className="btn btn-neutral btn-outline w-1/2 ">Share</button>
                        </div>

                    </div>
                    <hr />
                    <div className='flex flex-col justify-around gap-5 my-10'>

                        <div className='flex gap-6'>
                            <img className='w-6 h-6' src={donationIcon} alt="Crowdfunding Icon" />
                            <div>
                                <h1 className='font-bold text-xl'>Brayn dash</h1>
                                <h1 className='font-bold text-sm'>50$ · 1D</h1>
                                <p>From one Andrew to another! My wife and I are lifting you and Evelyn up in prayer for your full recovery in Jesus name! We spend many nights camping and exploring with you! We are grateful for the places you have taken us and the incredible knowledge you share. We are praying for peace for your loved ones, we are praying for the care team and the hands they lay on you, our God is a healer and a miracle worker and you are in his hands.</p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <img className='w-6 h-6' src={donationIcon} alt="Crowdfunding Icon" />
                            <div>
                                <h1 className='font-bold text-xl'>Brayn dash</h1>
                                <h1 className='font-bold text-sm'>50$ · 1D</h1>
                                <p>"This project has transformed my investment strategy and opened new doors for growth. I highly recommend it to anyone looking to make a meaningful impact while earning returns."</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

             <div className='bg-white shadow-xl rounded-2xl w-full h-fit'>
             <div className=' flex justify-between  p-4'>
                    <div>
                        <p className='font-medium'>Funds Raised</p>
                        <h1 className='font-semibold text-2xl mt-2'>$388 USD raised</h1>
                        <p className='text-[12px]'>$410K goal  ·  5.5K donations</p>
                        <div className='my-10'>
                        <button className="btn bg-[#2E74EC] rounded-full w-60 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Share Now</button> <br /> <br />
                        <button className="btn bg-[#00B67A] rounded-full w-60 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Invest Now</button>
                        </div>
                        <div className='flex gap-3 my-3'>
                            <img src={growthIcon} alt="" /> <span>276 people just donated</span>
                        </div>
                        <p className='font-medium'>Goal</p>
                        <p className='font-semibold text-xl text-[#00B67A]'>25</p>
                        <p className='font-medium'>Contributors</p>
                        <div className='my-10'>
                        <div className='flex gap-6'>
                            <img className='w-6 h-6' src={donationIcon} alt="Crowdfunding Icon" />
                            <div>
                                <h1 className='font-bold text-xl'>Brayn dash</h1>
                                <h1 className='font-bold text-sm'>50$ · Recent donation</h1>
                               
                            </div>
                        </div>
                        <div className='flex gap-6 my-3'>
                            <img className='w-6 h-6' src={donationIcon} alt="Crowdfunding Icon" />
                            <div>
                                <h1 className='font-bold text-xl'>Brayn dash</h1>
                                <h1 className='font-bold text-sm'>50$ · Recent donation</h1>
                               
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <img className='w-6 h-6' src={donationIcon} alt="Crowdfunding Icon" />
                            <div>
                                <h1 className='font-bold text-xl'>Brayn dash</h1>
                                <h1 className='font-bold text-sm'>50$ · Recent donation</h1>
                               
                            </div>
                        </div>
                        </div>
                    </div>
                    <div >
                        {/* For TSX uncomment the commented types below */}
                        <div className="radial-progress  text-blue-600" style={{ "--value": 70 } /* as React.CSSProperties */}
                            aria-valuenow={70} role="progressbar">70%</div>
                    </div>
                </div>
                <div className='flex gap-2  my-5 p-4'>
                            <button className="btn btn-neutral btn-outline w-1/2 rounded-full">See All</button>
                            <button className="btn btn-neutral btn-outline w-1/2 rounded-full"><FaRegStar /> Top Donation</button>
                        </div>
             </div>
            </div>
        </>
    )
}
