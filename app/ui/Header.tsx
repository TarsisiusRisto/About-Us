import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <section id="home" className="h-screen">
      <div className="text-center pt-32">
        <a className="text-2xl font-semibold text-black py-3 px-8 bg-white rounded-full hover:shadow-colorText hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
          Enjoy ur time 💕
        </a>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 self-center px-4">
          <div className="relative mt-36 lg:right-0">
            <Image
              src="/assets/Risto/risto.jpg"
              alt="risto"
              width={180}
              height={180}
              className="rounded-full relative max-w-full mx-auto z-10"
            />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:scale-120">
              <svg
                viewBox="0 0 200 150"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300] h-[300]"
              >
                <path
                  fill="#9EF0F0"
                  d="M35.8,-39C46.6,-25,55.8,-12.5,59.1,3.3C62.5,19.2,60,38.3,49.2,47.3C38.3,56.2,19.2,54.9,1.8,53.1C-15.6,51.3,-31.2,49,-46.4,40.1C-61.6,31.2,-76.3,15.6,-75.5,0.8C-74.7,-13.9,-58.3,-27.9,-43.1,-41.9C-27.9,-56,-13.9,-70.1,-0.7,-69.4C12.5,-68.7,25,-53.1,35.8,-39Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
          <div className="">
            <h1 className="text-center lg:text-2xl mt-14 text-base">
              Halo saya,
              <span className="font-bold block text-xl mt-1 lg:text-2xl">
                Tarsisius Risto Ardianto
              </span>
            </h1>
            <h2 className="font-semibold text-center text-lg mt-3 lg:text-xl">
              Mahasiswa
              <span className="block font-semibold text-l mt-5 lg:text-xl mb-10 leading-relaxed">
                Hobi bikin nisa nangis
              </span>
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-1/2 self-end px-4">
          <div className="relative mt-10 lg:mt-9 lg:right-0">
            <Image
              src="/assets/Anisa/anisa.JPG"
              alt="anisa"
              width={180}
              height={180}
              className="rounded-full relative max-w-full z-10 mx-auto"
            />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:scale-120">
              <svg
                viewBox="0 0 200 150"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300] h-[300]"
              >
                <path
                  fill="#FF0066"
                  d="M35.8,-39C46.6,-25,55.8,-12.5,59.1,3.3C62.5,19.2,60,38.3,49.2,47.3C38.3,56.2,19.2,54.9,1.8,53.1C-15.6,51.3,-31.2,49,-46.4,40.1C-61.6,31.2,-76.3,15.6,-75.5,0.8C-74.7,-13.9,-58.3,-27.9,-43.1,-41.9C-27.9,-56,-13.9,-70.1,-0.7,-69.4C12.5,-68.7,25,-53.1,35.8,-39Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
          <div className="">
            <h1 className="text-center lg:text-2xl mt-14 text-base">
              Halo saya,
              <span className="font-bold block text-xl mt-1 lg:text-2xl">
                Anisa Iktibar Maharani
              </span>
            </h1>
            <h2 className="font-bold text-center text-lg mt-3 lg:text-xl">
              Mahasiswa
              <span className="block font-semibold text-l mt-5 lg:text-xl mb-10 leading-relaxed">
                Hobi nangis
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
