import { Courgette } from "next/font/google";
import Image from "next/image";
import React from "react";
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });
const Header = () => {
  return (
    <section id="home" className="w-full">
      <div className="text-center mt-20 lg:mt-36">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold py-3 px-8">
          <span className={courget.className}>Enjoy ur time 💕</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 self-end px-4">
            <div className="relative mt-12 lg:right-0">
              <Image
                src="/assets/Risto/risto.jpg"
                alt="risto"
                width={200}
                height={200}
                className="rounded-full relative max-w-full mx-auto z-10"
              />
            </div>
            <div className="">
              <h1 className="text-center lg:text-2xl mt-10 text-base">
                <span className="font-bold block text-xl lg:text-2xl">
                  Tarsisius Risto Ardianto
                </span>
              </h1>
              <h2 className="font-semibold text-center text-lg lg:pt-5 lg:text-xl">
                Mahasiswa
                <span className="block font-semibold text-l lg:text-xl  leading-relaxed">
                  Hobi bikin nisa nangis
                </span>
              </h2>
            </div>
          </div>

          <div className="w-full lg:w-1/2 self-end px-4 lg:mt-36">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image
                src="/assets/Anisa/anisa.JPG"
                alt="anisa"
                width={200}
                height={200}
                className="rounded-full relative max-w-full z-10 mx-auto"
              />
            </div>
            <div className="">
              <h1 className="text-center lg:text-2xl mt-10 text-base">
                <span className="font-bold block text-xl lg:text-2xl">
                  Anisa Iktibar Maharani
                </span>
              </h1>
              <h2 className="font-bold text-center text-lg lg:pt-5 lg:text-xl">
                Mahasiswa
                <span className="block font-semibold text-l lg:text-xl leading-relaxed">
                  Hobi nangis
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
