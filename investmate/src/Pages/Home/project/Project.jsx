import React, { useEffect, useState } from 'react'

// Project component to display a list of available investment opportunities
export const Project = () => {
    const [projects, setProjects] = useState([]);

    // Fetch projects data from a local JSON file on component mount
    useEffect(() => {
        fetch("/projects.json")
            .then(response => response.json())
            .then(data => setProjects(data)) // Store the fetched data in state
            .catch(error => console.error("Failed to fetch projects:", error));
    }, []);

    return (
        <div className='my-10'>
            {/* Section Heading */}
            <h1 className='text-center font-bold text-4xl'>Available Project for Investment</h1>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10 mx-3'>
                {projects.map(project => (
                    <div key={project.id} className="card bg-base-100 w-full lg:w-96 shadow-sm">
                        
                        {/* Project Image */}
                        <figure>
                            <img className='w-full' src={project.image} alt={project.title} />
                        </figure>

                        {/* Project Details */}
                        <div className="card-body">
                            <h2 className="card-title text-[#0CA750]">{project.title}</h2>
                            <p>{project.description}</p>

                            <hr />

                            {/* Investment Progress Bar */}
                            <div>
                                <p className='text-center'>{project.progress}%</p>
                                <progress
                                    className="progress !text-[#2E74EC] w-full"
                                    value={project.progress}
                                    max="100"
                                ></progress>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className='flex justify-center'>
                <button className="btn btn-outline btn-success mt-16">View All</button>
            </div>
        </div>
    )
}
