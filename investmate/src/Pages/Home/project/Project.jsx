import React from 'react'
import project1 from "../../../assets/project1.png"
import project2 from "../../../assets/project2.png"
import project3 from "../../../assets/project3.png"

export const Project = () => {
    
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center font-bold text-4xl'>Available Project for Investment</h1>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 my-10 mx-3'>
                    <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
                        <figure>
                            <img
                                className='w-full'
                                src={project1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-[#0CA750]">Eco-Friendly Manufacturing</h2>
                            <p>Our mission is to promote sustainability through renewable energy, waste reduction, and eco-friendly innovations.</p>
                            <hr />
                            <div>
                                <p className='text-center'>52%</p>
                                <progress className="progress !text-[#2E74EC] w-full" value={52} max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
                        <figure>
                            <img
                                src={project2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title ">Sustainable Agriculture</h2>
                            <p>We promote eco-friendly farming practices to ensure food security while protecting the environment. Our focus</p>
                            <hr />
                            <div>
                                <p className='text-center'>60%</p>
                                <progress className="progress !text-[#2E74EC] w-full" value={60} max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
                        <figure>
                            <img
                                src={project3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title ">Renewable Energy Solutions</h2>
                            <p>We drive the transition to clean energy for a greener planet.Join us in creating a cleaner, renewable-powered world! </p>
                            <hr />
                            <div>
                                <p className='text-center'>78%</p>
                                <progress className="progress !text-[#2E74EC] w-full" value={78} max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <button className="btn btn-outline btn-success mt-16 ">View All</button>
                </div>
            </div>
        </>
    )
}
