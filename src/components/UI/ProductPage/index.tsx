import { FC } from "react";
import Image from "next/image";
import ProductSettings from "./ProductSettings";
import ProductDesc from "./ProductDesc";
import Carousel from "@/components/common/Carousel";

const ProductPage: FC = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[50%]">
          <div className="flex justify-center">
            <div className="flex gap-[24px]">
              <div className="w-[535px] h-[668px]">
                <Image
                  src={"/img/jordan/green/jordan_green_1.jpg"}
                  alt="Green Jordans"
                  layout="responsive"
                  width={762}
                  height={951}
                />
              </div>
              <div className="w-[400px]">
                <ProductSettings />
              </div>
            </div>
          </div>
          <ProductDesc className="mt-[24px]" />
        </div>
      </div>
      <h2 className="font-xl font-bold">More images of the product:</h2>
      <Carousel />
    </>
  );
};

export default ProductPage;
