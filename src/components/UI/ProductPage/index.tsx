"use client";
import { FC, useState } from "react";
import Image from "next/image";
import ProductSettings from "./ProductSettings";
import ProductDesc from "./ProductDesc";
import Carousel from "@/components/common/Carousel";
import { product } from "@/data/data";

const ProductPage: FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("green");

  return (
    <>
      {product.map((item) => {
        const coverImage =
          selectedColor === "green"
            ? item.images.green[0].image
            : item.images.blue
            ? item.images.blue[0].image
            : item.images.green[0].image;

        return (
          <div key={item.id} className="w-full">
            <div className="flex justify-center">
              <div className="w-[50%] sm:w-full md:w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex justify-center">
                  <div className="flex items-start gap-6 sm:flex-col sm:w-full md:flex-row md:w-full lg:flex-row lg:w-full">
                    <div className="w-[535px] sm:w-full xl:max-w-[480px]">
                      <Image
                        src={coverImage}
                        alt={`${selectedColor} Jordans`}
                        width={762}
                        height={951}
                        layout="responsive"
                        priority
                      />
                    </div>

                    <div className="w-1/2 sm:w-full xl:max-w-[480px]">
                      <ProductSettings
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        sizes={item.sizes}
                      />
                    </div>
                  </div>
                </div>

                <ProductDesc
                  descriptionText={item.description}
                  className="mt-6"
                />
              </div>
            </div>

            <div className="w-full  py-12 mt-12">
              <h2 className="text-center uppercase text-xl font-bold mb-8">
                More images of the product:
              </h2>
              <Carousel
                slides={
                  selectedColor === "green"
                    ? item.images.green
                    : item.images.blue || item.images.green
                }
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;
