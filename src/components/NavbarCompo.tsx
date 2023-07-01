import Image from "next/image";
import React from "react";
import logo from "@/assets/images/pokoLogos.png";

const NavbarCompo = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="relative bg-white shadow-sm">
        <h2 className="pb-7 pt-4 w-screen text-center text-2xl font-semibold">
          TCG Marketplace
        </h2>
        <div className="absolute inset-x-0 -bottom-[1.35rem] flex justify-center">
          <Image
            src={logo}
            width={70}
            height={70}
            alt="Picture of the author"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarCompo;
