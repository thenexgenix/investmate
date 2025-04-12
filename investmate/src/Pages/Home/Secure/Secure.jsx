import React from 'react'
import secureBanner from "../../../assets/secureSectionBanner.png"
import icon from "../../../assets/securitySectionIcon.png"

// Secure component highlighting platform's safety features and user protection
export const Secure = () => {
  return (
    <>
      {/* Full-screen hero section with background */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-full flex-col-reverse lg:flex-row-reverse !justify-around">

          {/* Security banner image (on the right in large screens) */}
          <img
            src={secureBanner}
            className="w-full lg:max-w-sm rounded-lg"
            alt="Security banner"
          />

          {/* Secure info content (on the left in large screens) */}
          <div>
            <p className='text-[#2E74EC]'>Secure</p>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Your Investments Are <br /> Our Top Priority
            </h1>
            <p className="py-6">
              We implement cutting-edge security measures to protect your <br />
              investments. Our platform uses encryption and multi-factor <br />
              authentication to ensure your data remains safe.
            </p>

            {/* Security features list */}
            <div className='flex flex-col justify-around gap-5 my-10'>

              {/* Feature 1: End-to-End Encryption */}
              <div className='flex gap-5'>
                <img className='w-6 h-6' src={icon} alt="Encryption icon" />
                <div>
                  <h1 className='font-bold text-xl'>End-to-End Encryption</h1>
                  <p>
                    All user data, transactions, and communications are protected with AES-256 <br />
                    encryption, ensuring that sensitive information remains secure.
                  </p>
                </div>
              </div>

              {/* Feature 2: Multi-Factor Authentication */}
              <div className='flex gap-6'>
                <img className='w-6 h-6' src={icon} alt="Authentication icon" />
                <div>
                  <h1 className='font-bold text-xl'>Multi-Factor Authentication (MFA)</h1>
                  <p>
                    To prevent unauthorized access, we enforce MFA, requiring users to verify their <br />
                    identity through multiple authentication steps.
                  </p>
                </div>
              </div>

              {/* Feature 3: Secure Payment Processing */}
              <div className='flex gap-6'>
                <img className='w-6 h-6' src={icon} alt="Payment security icon" />
                <div>
                  <h1 className='font-bold text-xl'>Secure Payment Processing</h1>
                  <p>
                    We partner with PCI-DSS compliant payment gateways to process all transactions <br />
                    securely, preventing fraud and unauthorized payments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
