"use client";
import { FC } from "react";
import SizeGrid from "@/components/common/SizeGrid";
import CustomBtn from "@/components/common/CustomBtn";
import ColorSelect from "@/components/common/ColorSelect";

interface ProductSettingsProps {
  title: string;
  category: string;
  price: number;
  selectedColor: string | undefined;
  setSelectedColor: (color: string) => void;
  sizes: { size: string }[];
}

const ProductSettings: FC<ProductSettingsProps> = ({
  title,
  category,
  price,
  selectedColor,
  setSelectedColor,
  sizes,
}) => {
  const addToCart = (id: number) => {
    console.log(`Product with id:${id} added to the cart`);
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <h4 className="text-gray-500">{category}</h4>
        <p className="font-bold">${price}</p>
      </div>
      <ColorSelect
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <SizeGrid sizes={sizes} />
      <div className="flex flex-col space-y-3">
        <CustomBtn
          className="bg-black text-white duration-500 hover:bg-white hover:text-gray-500 border-[2px] border-gray-500"
          onClick={() => addToCart(1)}
        >
          <p>Add to bag</p>
        </CustomBtn>
        <CustomBtn
          className="border-[2px] border-black text-black duration-500 hover:bg-black hover:text-white"
          onClick={() => addToCart(1)}
        >
          <p>Add to favourite</p>
        </CustomBtn>
      </div>
    </div>
  );
};

export default ProductSettings;
