import React from "react";
import { Courgette } from "next/font/google";
import Image from "next/image";
import img from "../../public/assets/coupleHands.svg";
import CountUpTimer from "./ui/Timer/CountUpTimer";
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });
const About = () => {
  return (
    <div
      id="about"
      className="h-screen px-4 pt-10 w-full flex flex-col lg:flex-row justify-between items-center md:mb-16 "
    >
      <div className="w-full lg:w-1/2 text-center lg:text-start px-5 lg:pl-24 items-center">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5">
          {/* <small className="text-3xl font-semibold">Test</small> */}
          <br />
          <span className={courget.className}>About Us</span>
        </h1>
        <h2 className="text-lg lg:text-2xl">
          Kedua orang asing yang dipertemukan di tengah-tengah camping, ya
          itulah kami,
          <span className="bg-black px-3 py-1 text-white font-semibold rounded shadow-sm">
            lucunya
          </span>
          {""} 3 hari setelahnya kita dating, dan sebulan kemudian kita
          berpacaran.
          <p className="text-lg lg:text-2xl ">
            Kita berdua cocok, meski diuji dengan perbedaan keyakinan. But it's
            okay
          </p>
          <p>Banyak momen - momen yang kita buat selama kita bersama.</p>
          <p className="mt-4">Semoga kita selalu bersama ya sayang❤️</p>
        </h2>
        <CountUpTimer launcDate="2024-04-14 00:00:00" />
        <div className="text-2xl font-semibold">
          <span className={courget.className}>hari kita bersama</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center pt-5 lg:mt-10 lg:pl-6">
        <Image
          src={img}
          alt="imageTimer"
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default About;
