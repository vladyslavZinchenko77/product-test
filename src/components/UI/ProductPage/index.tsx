import { FC } from "react";
import Image from "next/image";
import ProductSettings from "./ProductSettings";
import ProductDesc from "./ProductDesc";
import Carousel from "@/components/common/Carousel";

const ProductPage: FC = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[50%]  sm:w-full  md:w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex justify-center">
            <div className="flex items-start gap-[24px] sm:flex-col  sm:w-full md:flex-row md:w-full lg:flex-row lg:w-full ">
              <div className="w-[535px] h-[668px]  sm:w-full h-auto xl:max-w-[480px]">
                <Image
                  src={"/img/jordan/green/jordan_green_1.jpg"}
                  alt="Green Jordans"
                  layout="responsive"
                  width={762}
                  height={951}
                />
              </div>
              <div className="w-[50%]  sm:w-full xl:max-w-[480px]">
                <ProductSettings />
              </div>
            </div>
          </div>
          <ProductDesc className="mt-[24px]" />
        </div>
      </div>
      <h2 className="mt-[24px] upercase font-xl font-bold">
        More images of the product:
      </h2>
      <div className="mt-[12px]">
        <Carousel />
      </div>
    </>
  );
};

export default ProductPage;
