import { Courgette } from "next/font/google";
import Image from "next/image";
import React from "react";
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });
const Header = () => {
  return (
    <section id="home" className="">
      <h1 className="text-3xl text-center mt-16 lg:mt-24 lg:text-5xl xl:text-6xl font-semibold py-3 px-8">
        <span className={courget.className}>Enjoy ur time 💕</span>
      </h1>
      <div className="flex flex-wrap mt-20">
        <div className="w-full lg:w-1/2 self-end mb-8">
          <Image
            src="/assets/Risto/risto.jpg"
            alt="risto"
            width={280}
            height={280}
            className="rounded-full max-w-full mx-auto z-10"
          />
          <h1 className="text-center lg:text-2xl mt-10 text-base">
            <span className="font-bold block text-xl lg:text-2xl">
              Tarsisius Risto Ardianto
            </span>
          </h1>
          <h2 className="font-semibold text-center text-lg lg:pt-5 lg:text-xl">
            lagi nyari loker
            <span className="block font-semibold text-lg lg:text-xl leading-relaxed mb-24">
              Hobi bikin nisa nangis
            </span>
          </h2>
        </div>

        <div className="w-full lg:w-1/2 self-end mb-8">
          <Image
            src="/assets/Anisa/anisa.JPG"
            alt="anisa"
            width={280}
            height={280}
            className="rounded-full max-w-full mx-auto z-10"
          />
          <h1 className="text-center lg:text-2xl mt-10 text-base">
            <span className="font-bold block text-xl lg:text-2xl">
              Anisa Iktibar Maharani
            </span>
          </h1>
          <h2 className="font-semibold text-center text-lg lg:pt-5 lg:text-xl">
            lagi pusing skripsi
            <span className="block font-semibold text-l lg:text-xl leading-relaxed mb-24">
              Hobi nangis
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
