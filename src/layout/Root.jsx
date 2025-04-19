import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../utils/ScrollTop";

const Root = () => {
  return (
    <main className="font-poppins overflow-hidden">
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
