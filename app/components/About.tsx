import React from "react";
import { Courgette } from "next/font/google";
import Image from "next/image";
import img from "../../public/assets/coupleHands.svg";
import CountUpTimer from "./ui/Timer/CountUpTimer";
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-between items-start"
    >
      <div className=" w-full lg:w-1/2 lg:pl-24 lg:mt-24 lg:mb-24">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5 text-center">
          <span className={courget.className}>About Us</span>
        </h1>
        <p className="text-center text-lg lg:text-2xl mb-5">
          Kedua orang asing yang dipertemukan di tengah-tengah camping, ya
          itulah kami,{" "}
          <span className="bg-black px-3 py-1 text-white font-semibold rounded shadow-sm">
            lucunya
          </span>{" "}
          3 hari setelahnya kita dating, dan sebulan kemudian kita berpacaran.
          Kita berdua cocok, meski diuji dengan perbedaan keyakinan. Banyak
          momen - momen yang kita buat selama kita bersama. Semoga kita selalu
          bersama ya sayang💕
        </p>
        <div className="w-full flex flex-col justify-center items-center">
          <CountUpTimer launcDate="2024-04-14 00:00:00" />
          <div className="text-2xl font-semibold inline-block px-3 py-1 rounded">
            <span className={courget.className}>hari kita bersama</span>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 flex justify-center lg:mt-24 lg:mb-24">
        <Image
          src={img}
          alt="imageTimer"
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </section>
  );
};

export default About;
