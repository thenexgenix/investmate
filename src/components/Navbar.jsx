import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import investmatelogo from "../assets/logo/investmate-logo.png";

// const navItems = [
//   { id: 1, label: "Home", path: "/" },
//   { id: 2, label: "About", path: "/about" },
//   { id: 3, label: "Checkout", path: "/checkout" },
//   {
//     id: 4,
//     label: "More Info",
//     submenu: [
//       { label: "Investment Plans", path: "/moreinfo/investment-Plans" },
//       { label: "Market Insights", path: "/moreinfo/marketi-insights" },
//       {
//         label: "Investment Calculator",
//         path: "/moreinfo/investment-calculator",
//       },
//     ],
//   },
// ];

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // const submenuVariants = {
  //   hidden: { opacity: 0, y: -10, height: 0 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     height: "auto",
  //     transition: { duration: 0.3 },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: -10,
  //     height: 0,
  //     transition: { duration: 0.2 },
  //   },
  // };

  return (
    <header className=" fixed w-full  z-50">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="  px-6 py-6 flex   justify-center md:justify-center items-center relative"
      >
        <div className="relative">
          {/* Spinning border */}
          <div className="border-spin-wrapper rounded-[4rem]" />
          <div className="absolute inset-0 bg-dotted blur-2xl rounded-[4rem]" />
          <div className="absolute inset-0 rounded-[4rem] border-4 border-transparent animate-shimmer" />
          <div className="relative z-10 bg-white/80 backdrop-blur-lg border-2 border-transparent w-72 md:w-2xl flex justify-center items-center px-6 py-4 md:px-20 md:py-6 rounded-[4rem]">
            <NavLink to="/">
              <img src={investmatelogo} alt="investmate" className="h-12" />
            </NavLink>
          </div>
        </div>

        {/* Desktop Nav */}
        {/* <ul className="hidden md:flex gap-8 text-base font-semibold text-gray-700">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <div
                  className="flex items-center gap-1 cursor-pointer hover:text-green-600"
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === item.id ? null : item.id)
                  }
                >
                  <NavLink to={item.path}>{item.label}</NavLink>
                  {item.submenu && <ChevronDown size={16} />}
                </div> */}

        {/* Submenu (Desktop) */}
        {/* <AnimatePresence>
                  {item.submenu && activeSubmenu === item.id && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={submenuVariants}
                      className="absolute top-10 left-0 w-60 bg-white rounded-lg shadow-lg py-3 px-4 z-50"
                    >
                      {item.submenu.map((sub, idx) => (
                        <li
                          key={idx}
                          className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600"
                        >
                          <NavLink to={sub.path}>{sub.label}</NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul> */}

        {/* Mobile Toggle */}
        {/* <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="text-2xl" />
              ) : (
                <Menu className="text-2xl" />
              )}
            </button>
          </div> */}

        {/* Mobile Menu */}
        {/* <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-6 py-4 md:hidden z-50"
              >
                {navItems.map(({ id, label, path, submenu }) => (
                  <div key={id} className="w-full">
                    <li
                      className="text-gray-800 font-medium pb-2 cursor-pointer hover:text-green-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <NavLink to={path}>{label}</NavLink>
                    </li>

                    {/* Submenu (Mobile) */}
        {/* {submenu && (
                      <ul className="pl-4 mt-2 bg-gray-50 p-2 rounded-md">
                        {submenu.map((subItem, index) => (
                          <li
                            key={index}
                            className="text-gray-600 py-1 px-2 text-sm hover:text-green-500 hover:bg-white rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            <NavLink to={subItem.path}>{subItem.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <li>
                  <button className="border w-full py-2 rounded hover:bg-black hover:text-white font-semibold">
                    Sign Up
                  </button>
                </li>
                <li>
                  <button className="bg-green-500 w-full py-2 rounded text-white font-semibold hover:bg-green-600">
                    Login
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>  */}
      </motion.nav>
    </header>
  );
}
