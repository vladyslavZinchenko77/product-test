import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div>
        <Image src={"/svg/nike.svg"} width={48} height={48} alt="Nike-logo" />
      </div>
    </Link>
  );
};

export default Logo;
