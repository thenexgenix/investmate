import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

// Navbar component to handle site navigation
const Navbar = () => {
  const location = useLocation(); // Hook to access current route
  const [active, setActive] = useState(location.pathname); // Track active route for styling

  // Update active path when a nav item is clicked
  const handleActive = (path) => {
    setActive(path);
  };

  // Navigation items with labels and route paths
  const navItems = [
    { label: "Home Page", path: "/" },
    { label: "Our Projects", path: "/project" },
    { label: "Investor Dashboard", path: "/investor" },
    { label: "More Info", path: "/reviews" },
    { label: "Login", path: "/login" },
  ];

  // Rendered nav items with active class and underline indicator
  const navOptions = (
    <>
      {navItems.map((item) => (
        <li key={item.path} onClick={() => handleActive(item.path)}>
          <Link
            to={item.path}
            className={`relative transition-all duration-300 ${
              active === item.path ? "text-[#00B67A]" : ""
            }`}
          >
            {item.label}
            {/* Underline for active item */}
            {active === item.path && (
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#00B67A]"></span>
            )}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar start: logo and mobile dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger icon for small screens */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown menu content for mobile */}
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        {/* Logo image */}
        <img src={logo} alt="Logo" />
      </div>

      {/* Navbar end: desktop menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
