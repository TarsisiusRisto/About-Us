"use client";
import React from "react";
import { Itim } from "next/font/google";
import Image from "next/image";
import img from "../../public/assets/imageTimer.png";
import Timer from "../components/Timer";

const itim = Itim({ weight: ["400"], subsets: ["latin"] });
const Count = () => {
  return (
      <section className="px-14 pt-36 pb-32 w-full flex flex-col lg:flex-row justify-between items-center bg-slate-500">
        <div className="w-full lg:w-1/2 text-center lg:text-start items-center">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5 text-black">
            <small className="text-3xl font-semibold"> Test </small>
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
          <Timer launcDate="2025-08-1 00:00:00" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 lg:pl-4">
          <Image
            src={img}
            alt="imageTimer"
            width={650}
            height={450}
            className="w-full max-w-[650px] h-auto"
          />
        </div>
      </section>
  );
};

export default Count;
