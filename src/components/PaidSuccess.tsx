import { IconChevronDown, IconCircleCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import check from "@/assets/images/check_img.png";

const PaidSuccess = () => {
  return (
    <div className="relative top-[192px] z-10 h-[450px] w-[400px] rounded-lg bg-white p-6 shadow-xl transition-transform duration-300">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <Image
          src={check}
          width={300}
          height={300}
          alt="Pokimon Logo"
          className=""
        />
        <h3 className="text-xl font-semibold">Payment success!</h3>
      </div>
    </div>
  );
};

export default PaidSuccess;
