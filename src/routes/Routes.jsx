import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Root from "./../layout/Root";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ProjectDetailsPage from "../components/home/ProjectDetailsPage";

const AppRoutes = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* home path */}
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/invest/:title" element={<ProjectDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRoutes;
