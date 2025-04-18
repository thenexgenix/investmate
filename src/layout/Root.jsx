import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <main className="font-poppins overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Root;
