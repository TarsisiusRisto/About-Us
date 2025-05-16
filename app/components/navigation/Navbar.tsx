import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../ui/Button/ModeToggle";
import { Courgette } from "next/font/google";
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });

const Navbar = ({}) => {
  const [isScroll, setIsScroll] = useState(false);

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
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between relative ${
          isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </a>

        <h1 className="text-xl lg:text-4xl font-semibold">
          <span className={courget.className}>Enjoy ur time 💕</span>
        </h1>

        {/* Icon Moon */}
        <div className="flex items-center">
          <ModeToggle />
          {/* ToggleButton */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
