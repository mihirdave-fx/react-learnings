import { navLinks } from "../../data/NavLinks";
import { dropdownLinks } from "../../data/NavLinks";
import { NavLink, Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { MdClose, MdMenu } from "react-icons/md";

import { GiLoincloth } from "react-icons/gi";
import { useState } from "react";
import CartSignin from "../Cart-Signin/CartSignin";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md bg-white relative z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-3">
        {/* logo img section */}
        <div>
          <a
            href="#"
            className="font-bold flex gap-2 text-2xl md:text-3xl items-center"
          >
            {" "}
            <GiLoincloth className="w-10" />
            One Store
          </a>
        </div>
        {/* menu section */}
        <div className="nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-8 font-semibold">
            {navLinks.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  className="inline-block px-4 hover:text-dark duration-200"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
            {/* dropdown menu */}
            {/* {
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-0.5 py-2">
                  Dropdown
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-999 hidden group-hover:block w-37.5 rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {dropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-light"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            } */}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {/* cart */}
          <CartSignin />
          {/* signin */}
          <Link
            to="/sign-in"
            className="bg-primary text-black px-5 py-2 rounded-full hover:bg-dark hover:text-white cursor-pointer font-semibold"
          >
            Sign in
          </Link>
          {/* menu icon */}
          <div onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <MdClose className="text-3xl cursor-pointer" />
            ) : (
              <MdMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NewNavbar;
