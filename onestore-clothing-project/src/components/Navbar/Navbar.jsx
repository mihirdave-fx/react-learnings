import React, { useEffect, useState } from "react";
import { GiLoincloth } from "react-icons/gi";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../../data/NavLinks";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        id="navbar"
        className={`w-full h-[8ch] backdrop-blur-sm border-b border-neutral-200 flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 ${
          isScrolled ? "bg-dark/30" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 md:pr-16 pr-0">
          <Link
            to="/"
            className="text-lg font-semibold text-black flex items-center gap-x-2"
          >
            <GiLoincloth size={24} />
            One Store
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none cursor-pointer"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Navbar items and buttons */}
        <div
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none transition-transform duration-300 ease-in-out transform flex-1 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 z-60`}
        >
          {/* Logo and close icon Inside Toggle Menu */}
          <div className="w-full md:hidden flex items-center justify-between px-4">
            {/* Logo */}
            <Link
              to="/"
              className="text-lg font-semibold text-black flex items-center gap-x-2"
            >
              <GiLoincloth size={24} />
              <span>One Store</span>
            </Link>
            {/* Close Icon */}
            <div className="md:hidden flex justify-end py-6">
              <button
                onClick={closeNavbar}
                className="text-secondary focus:outline-none cursor-pointer"
              >
                <IoMdClose size={28} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-neutral-300 md:hidden"></div>

          {/* Navbar items and button */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
            {/* Navbar items */}
            <ul className="flex flex-col md:flex-row items-center gap-6 text-base text-neutral-700 font-normal">
              {navLinks.map((item) => (
                <li key={item.id} onClick={closeNavbar}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${
                        isActive
                          ? "text-secondary font-medium"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="w-fit px-6 py-2 rounded-full text-base text-neutral-800 font-medium bg-transparent transition-colors duration-200 cursor-pointer">
                <Cart />
              </button>
              <button className="w-fit px-6 py-2 rounded-lg text-base text-neutral-50 bg-dark hover:bg-secondary transition-colors duration-200 cursor-pointer">
                <Link to="/sign-in" className="">
                  Sign in
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
