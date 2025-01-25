import Image from "next/image";
import React, { useEffect, useState } from "react";
import ToggleButton from "../ui/Button/ToggleButton";
import { ModeToggle } from "../ui/Button/ModeToggle";

const Navbar = ({}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <nav
        className={`w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between relative ${
          isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#home">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "shadow-sm"
          } `}
        >
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
        </ul>

        {/* Icon Moon */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* ToggleButton */}
          <div>
            <ToggleButton isClick={isClick} toggleNavbar={toggleNavbar} />
            {/* Menu Navigation */}
            <ul
              className={`fixed top-0 bg-darkHover text-black bottom-0 right-0 w-48 z-50 h-screen p-5 transform transition-transform duration-500 ease-in-out ${
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
                  <a className="font-Roboto" href="#about">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-Roboto" href="#gallery">
                    Gallery
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
