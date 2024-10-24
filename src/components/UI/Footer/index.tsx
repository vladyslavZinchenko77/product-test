import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="p-[12px] my-[24px] flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left">
      <p className="mb-4 lg:mb-0">© 2024 Nike, Inc. All rights reserved</p>
      <nav className="flex flex-wrap justify-center lg:justify-start">
        {[
          "Guides",
          "Terms of Use",
          "Terms of Sale",
          "Company Details",
          "Privacy & Cookie Policy",
          "Privacy & Cookie Setting",
        ].map((label) => (
          <a
            key={label}
            href="#"
            className="mr-[12px] mb-2 lg:mb-0 hover:text-gray-500 duration-300"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
