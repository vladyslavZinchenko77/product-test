import React, { FC } from "react";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const Cartpage: FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Cartpage;
