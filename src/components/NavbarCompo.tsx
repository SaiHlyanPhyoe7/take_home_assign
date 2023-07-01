import Image from "next/image";
import React from "react";
import logo from "@/assets/images/pokoLogos.png";

// This component represents a navbar for the TCG Marketplace.
const NavbarCompo = () => {
  return (
    <div className="fixed left-0 top-0 z-10 w-full">
      <div className="relative bg-white shadow-sm">
        <h2 className="w-screen pb-7 pt-4 text-center text-2xl font-semibold">
          TCG Marketplace
        </h2>
        {/* The following code displays the Pokimon logo */}
        <div className="absolute inset-x-0 -bottom-[1.35rem] flex justify-center">
          <Image
            src={logo}
            width={70}
            height={70}
            alt="Pokimon Logo"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarCompo;
