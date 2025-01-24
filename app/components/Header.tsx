import Image from "next/image";
import React from "react";
import ristoBlob from "../../public/assets/ristoBlob.svg";
import anisaBlob from "../../public/assets/anisaBlob.svg";
const Header = () => {
  return (
    <section id="home" className="w-full">
      <div className="text-center mt-20 lg:mt-36">
        <a className="text-2xl font-semibold text-black py-3 px-8 bg-white rounded-full hover:shadow-colorText hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
          Enjoy ur time 💕
        </a>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 self-center px-4">
          <div className="relative mt-12 lg:right-0">
            <Image
              src="/assets/Risto/risto.jpg"
              alt="risto"
              width={180}
              height={180}
              className="rounded-full relative max-w-full mx-auto z-10"
            />
          </div>
          <div className="">
            <h1 className="text-center lg:text-2xl mt-10 text-base">
              Halo saya,
              <span className="font-bold block text-xl lg:text-2xl">
                Tarsisius Risto Ardianto
              </span>
            </h1>
            <h2 className="font-semibold text-center text-lg lg:text-xl">
              Mahasiswa
              <span className="block font-semibold text-l lg:text-xl mb-10 leading-relaxed">
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
          </div>
          <div className="">
            <h1 className="text-center lg:text-2xl mt-10 text-base">
              Halo saya,
              <span className="font-bold block text-xl lg:text-2xl">
                Anisa Iktibar Maharani
              </span>
            </h1>
            <h2 className="font-bold text-center text-lg lg:text-xl">
              Mahasiswa
              <span className="block font-semibold text-l lg:text-xl mb-10 leading-relaxed">
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
