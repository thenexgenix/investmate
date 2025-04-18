import React from "react";
import useProject from "../../hook/useProject";
import { Link } from "react-router";
import Button from "../Button";

const ProjectCard = () => {
  const { allprojectData, loading } = useProject();
  if (loading) {
    return (
      <section className="px-4 py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-12 lg:mx-28">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <div className="animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Projects for Investment
        </h2>
      </div>
      <div className="flex flex-col  justify-center items-center gap-6 mx-10 md:mx-40 lg:mx-[35%]">
        {allprojectData?.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md hover:shadow-lg rounded-2xl overflow-hidden transition duration-300 "
          >
            <div className="overflow-hidden">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-48 md:h-52 lg:h-60 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.short_description}
              </p>
              <Link to={`/invest/${project.title}`}>
                <Button text={"see Details"} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
