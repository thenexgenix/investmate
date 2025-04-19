import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import InvestmentFeatures from "../components/home/InvestmentFeatures";
import Returns from "../components/home/Returns";
import Secure from "../components/home/secure";
import ProjectCard from "../components/home/ProjectCard";
import JoinUsSection from "../components/home/JoinUsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Investmate - Your Trusted Investment Platform</title>
        <meta
          name="description"
          content="Investmate is a secure and reliable investment platform offering various investment opportunities. Join us to start your investment journey today."
        />
        <meta
          name="keywords"
          content="investment, secure investment, investment platform, financial investment, investment opportunities"
        />
        <meta
          property="og:title"
          content="Investmate - Your Trusted Investment Platform"
        />
        <meta
          property="og:description"
          content="Investmate is a secure and reliable investment platform offering various investment opportunities. Join us to start your investment journey today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Investmate - Your Trusted Investment Platform"
        />
        <meta
          name="twitter:description"
          content="Investmate is a secure and reliable investment platform offering various investment opportunities. Join us to start your investment journey today."
        />
      </Helmet>
      <Hero />
      <InvestmentFeatures />
      <Returns />
      <Secure />
      <ProjectCard />
      <JoinUsSection />
    </div>
  );
};

export default Home;
