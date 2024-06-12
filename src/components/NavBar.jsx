import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp, IoMagnetOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { LogoImage } from "../assets/images";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="NavBar text-black fixed w-full top-0 z-50 bg-white">
      <nav className="shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 items-center">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-8">
              {/* logo */}
              <div className="flex items-center">
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  {/* Show the logo image */}
                  <img src={LogoImage} className="h-16 w-auto" alt="Logo" />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 items-center">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </div>
              {/* Add a search Bar icon at the top in line with the navbar */}
              <div className="hidden lg:flex items-center gap-2">
                <FaMagnifyingGlass className="h-6 w-6 text-gray-700 cursor-pointer" />
                </div>

            </div>
            {/* secondary */}
            <div className="flex gap-6 items-center lg:mr-[60px]">
              <div className="hidden lg:flex items-center gap-10">
                <button className="rounded-[7px] border-solid border-2 border-gray-300 py-2 px-6 hover:bg-gray-700 hover:text-gray-100">
                  Login
                </button>
                <button className="rounded-[7px] border-solid border-2 border-gray-300 py-2 px-6 hover:bg-gray-700 hover:text-gray-100">
                  Sign Up
                </button>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? (
                    <IoCloseSharp className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Home
              </a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Contact Us</a>
              <button className="text-green-600 rounded-md border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                Login
              </button>
              <button className="text-green-600 rounded-md border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
