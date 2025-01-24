import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between relative">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={35}
          height={35}
          className="cursor-pointer"
        />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 ">
          <li className="group">
            <a
              href="#home"
              className="group-hover:text-colorText font-Poppins font-semibold"
            >
              Home
            </a>
          </li>
          <li className="group">
            <a
              href="#about"
              className="group-hover:text-colorText font-Poppins font-semibold"
            >
              About Us
            </a>
          </li>
          <li className="group">
            <a
              href="#gallery"
              className="group-hover:text-colorText font-Poppins font-semibold"
            >
              Gallery
            </a>
          </li>
          <li className="group">
            <a
              href="#contact"
              className="group-hover:text-colorText font-Poppins font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Icon Moon */}
        <div className="flex items-center gap-4">
          <button className="w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>

          {/* ToggleButton */}
          <div>
            <ToggleButton isClick={isClick} toggleNavbar={toggleNavbar} />
            {/* Menu Navigation */}
            <ul
              className={`fixed top-0 bottom-0 right-0 bg-rose-50 w-48 z-50 h-screen p-5 transform transition-transform duration-500 ease-in-out ${
                isClick ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="absolute top-8 right-5">
                <ToggleButton isClick={isClick} toggleNavbar={toggleNavbar} />
              </div>
              <div className="pt-14 h-full ">
                <li className="mb-4">
                  <a className="font-Roboto" href="#home">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-Roboto" href="#about-us">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-Roboto" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-Roboto" href="#contact">
                    Contact
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
