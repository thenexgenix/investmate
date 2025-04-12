import React from 'react'
import mailIcon from "../../../assets/Emailicon.png"
import phoneIcon from "../../../assets/Phoneicon.png"
import locationIcon from "../../../assets/Locationicon.png"

// Functional component to display a "Connect" section with contact information and a Google Map
export const ConnectSection = () => {
    return (
        // Main container with responsive flex layout
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 my-10'>

            {/* Left section: Heading, description, and embedded Google Map */}
            <div>
                <p className='font-medium'>Connect</p>
                <h1 className='font-semibold text-2xl my-2'>Get in Touch</h1>
                <p className='text-sm'>
                    We’re here to answer your questions and provide more information about our projects.
                </p>

                {/* Responsive Google Maps embed with aspect ratio maintained */}
                <div className='relative pt-[66.66%] mt-4'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full'
                        frameBorder='0'
                        scrolling='no'
                        marginHeight='0'
                        marginWidth='0'
                        src='https://maps.google.com/maps?width=600&height=400&hl=en&q=CUET&t=k&z=13&ie=UTF8&iwloc=B&output=embed'
                        title='Google Map of CUET'
                    ></iframe>
                </div>
            </div>

            {/* Right section: Contact details with icons */}
            <div className='w-fit'>
                {/* Email info */}
                <div className='flex gap-6'>
                    <img className='w-6 h-6' src={mailIcon} alt="Email Icon" />
                    <div>
                        <h1 className='font-bold text-xl'>Email</h1>
                        <h1 className='font-bold text-sm'>Investmate@gmail.com</h1>
                    </div>
                </div>

                {/* Phone info */}
                <div className='flex gap-6 my-3'>
                    <img className='w-6 h-6' src={phoneIcon} alt="Phone Icon" />
                    <div>
                        <h1 className='font-bold text-xl'>Phone</h1>
                        <h1 className='font-bold text-sm'>+1 (555) 000-0000</h1>
                    </div>
                </div>

                {/* Office location */}
                <div className='flex gap-6'>
                    <img className='w-6 h-6' src={locationIcon} alt="Location Icon" />
                    <div>
                        <h1 className='font-bold text-xl'>Office</h1>
                        <h1 className='font-bold text-sm'>ITBI, CUET</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
