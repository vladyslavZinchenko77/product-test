import React, { FC } from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="p-[12px] mb-[24px] flex justify-between items-center">
      <Logo />
      <div className="flex sm:hidden md:flex">
        <Link
          className="pl-[12px] font-bold hover:text-gray-500 duration-300"
          href={"#"}
        >
          New & Featured
        </Link>
        <Link
          className="pl-[12px] font-bold hover:text-gray-500 duration-300"
          href={"#"}
        >
          Men
        </Link>
        <Link
          className="pl-[12px] font-bold hover:text-gray-500 duration-300"
          href={"#"}
        >
          Women
        </Link>
        <Link
          className="pl-[12px] font-bold hover:text-gray-500 duration-300"
          href={"#"}
        >
          Kids
        </Link>
      </div>
      <div className="flex">
        <div className="p-2 rounded-full duration-500 hover:bg-gray-200">
          <Link href={"/cart"}>
            <Image src={"/svg/bag.svg"} width={24} height={24} alt="Cart" />
          </Link>
        </div>
        <Link href={"/favourite"}>
          <div className="p-2 rounded-full duration-500 hover:bg-gray-200">
            <Image
              src={"/svg/favourite.svg"}
              width={24}
              height={24}
              alt="Favourite"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
