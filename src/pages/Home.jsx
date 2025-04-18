import React from "react";
import Hero from "../components/home/Hero";
import InvestmentFeatures from "../components/home/InvestmentFeatures";
import Returns from "../components/home/Returns";
import Secure from "../components/home/secure";
import ProjectCard from "../components/home/ProjectCard";
import JoinUsSection from "../components/home/JoinUsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <InvestmentFeatures />
      <Returns />
      <Secure/>
      <ProjectCard/>
      <JoinUsSection/>
    </div>
  );
};

export default Home;
