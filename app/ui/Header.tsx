import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-center lg:mt-10">
        <p className="text-3xl lg:mt-10 mt-5">Enjoy ur time 💕</p>
      </div>

      <div id="home" className="flex  flex-wrap">
        <div className="w-full lg:w-1/2 self-center px-4">
          <div className="relative mt-16 lg:right-0">
            <Image
              src="/assets/Risto/risto.jpg"
              alt="risto"
              width={180}
              height={180}
              className="rounded-full relative max-w-full mx-auto z-10"
            />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:scale-120">
              <svg
                viewBox="0 0 200 220"
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
            <h1 className="text-center lg:text-2xl mt-5 font-semibold">
              Tarsisius Risto Ardianto
            </h1>
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
                viewBox="0 0 200 220"
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
            <h1 className="text-center lg:text-2xl mt-5 font-semibold">
              Anisa Iktibar Maharani
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
