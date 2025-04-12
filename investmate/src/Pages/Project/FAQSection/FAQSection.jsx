import React from 'react'

export const FAQSection = () => {
    return (
        <>
            <div className='my-10'>
                <h1 className='font-bold text-3xl'>FAQs</h1>
                <p>Find answers to your questions about our projects and investment opportunities.</p>
                <div className="collapse mt-10 collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">What is crowdfunding?</div>
                    <div className="collapse-content text-sm">Crowdfunding is a method of raising capital through the collective effort of individuals. It allows many people to contribute small amounts of money towards a project or venture, making it accessible for various initiatives. This approach democratizes funding and empowers entrepreneurs to realize their ideas.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I invest?</div>
                    <div className="collapse-content text-sm">To invest, simply create an account on our platform. Browse through the available projects and select one that aligns with your interests. Follow the prompts to complete your investment securely.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What are expected returns?</div>
                    <div className="collapse-content text-sm">Expected returns vary by project and are influenced by factors such as duration and risk level. Each project listing includes detailed financial projections to help you make informed decisions. Our investment calculator can also assist you in estimating potential earnings.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Is my investment safe?</div>
                    <div className="collapse-content text-sm">We prioritize transparency and compliance with Islamic finance principles to ensure the safety of your investment. Each project undergoes a thorough vetting process, and we provide regular updates on performance. Additionally, you can track your investments through your user dashboard.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I withdraw funds?</div>
                    <div className="collapse-content text-sm">Withdrawal policies depend on the specific terms of each project. Generally, you can withdraw your funds after the project reaches its funding goal or upon project completion. Please refer to the project details for more information.</div>
                </div>

                <div className='my-10'>
                <h1 className='font-bold text-3xl'>Still have questions?</h1>
                <p className='my-5'>We're here to help!</p>
                <button className="btn btn-outline btn-success">Connect</button>
                </div>
            </div>
        </>
    )
}
