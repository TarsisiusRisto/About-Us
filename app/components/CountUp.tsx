import React from "react";
import { Itim } from "next/font/google";
import Image from "next/image";
import img from "../../public/assets/coupleHands.svg";
import CountUpTimer from "./ui/Timer/CountUpTimer";
const itim = Itim({ weight: ["400"], subsets: ["latin"] });
const CountUp = () => {
  return (
    <div
      id="about"
      className="h-screen px-4 w-full flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="w-full lg:w-1/2 text-center lg:text-start px-5 lg:pl-24 items-center">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5 text-black">
          <small className="text-3xl font-semibold">Test</small>
          <br />
          <span className={itim.className}>Test1</span>
        </h1>
        <h2 className="text-black text-lg lg:text-xl">
          {" "}
          We&apos;re{" "}
          <span className="bg-white px-4 py-1 font-semibold rounded shadow-sm">
            Testing
          </span>
          {""} Will be here soon
        </h2>
        <h3 className="bg-white font-semibold text-xl lg:text-2xl uppercase px-2 py-1 inline-block rounded shadow-sm">
          Stay Tuned
        </h3>
        <CountUpTimer launcDate="2024-03-14 00:00:00" />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:mt-10 lg:pl-4">
        <Image
          src={img}
          alt="imageTimer"
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default CountUp;
