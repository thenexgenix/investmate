import React from 'react'
import oppur1 from "../../../assets/oppu1.png"
import oppur2 from "../../../assets/oppu2.png"
import oppur3 from "../../../assets/oppu3.png"

// Opportunities component showcasing key investment benefits
export const Opportunities = () => {
  return (
    <>
      {/* Responsive container for opportunity cards */}
      <div className='flex mx-2 flex-col lg:flex-row justify-around gap-5 my-10'>

        {/* Opportunity 1: Investment Transparency */}
        <div className='flex gap-6'>
          <img src={oppur1} alt="Investment Transparency" />
          <div>
            <h1 className='font-bold text-xl'>Investment Transparency</h1>
            <p>
              Full disclosure on all investments, ensuring you know exactly where your money is going.
            </p>
          </div>
        </div>

        {/* Opportunity 2: Islamic Finance Principles */}
        <div className='flex gap-6'>
          <img src={oppur2} alt="Islamic Finance Principles" />
          <div>
            <h1 className='font-bold text-xl'>Islamic Finance Principles</h1>
            <p>
              All investments are vetted to comply with Shariah law and ethical standards.
            </p>
          </div>
        </div>

        {/* Opportunity 3: Diverse Opportunities */}
        <div className='flex gap-6'>
          <img src={oppur3} alt="Diverse Opportunities" />
          <div>
            <h1 className='font-bold text-xl'>Diverse Opportunities</h1>
            <p>
              Access a wide range of Halal investment options across various sectors and risk levels.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
