"use client";
import { FC, useState } from "react";
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
  const [selectedSize, setSelectedSize] = useState<string>("");

  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      console.log("Please select size and colour");
      return;
    }

    const productDetails = {
      title,
      category,
      price,
      selectedColor,
      selectedSize,
    };

    console.log("Added to cart:", productDetails);
    setIsInCart(true);
  };

  const addToFavorites = () => {
    const productDetails = {
      title,
      category,
      price,
      selectedColor,
      selectedSize,
    };

    console.log("Added to favourites:", productDetails);
    setIsInFavorites(true);
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

      <SizeGrid
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <div className="flex flex-col space-y-3">
        <CustomBtn
          className={`${
            isInCart
              ? "bg-green-500 text-white border-green-500"
              : "bg-black text-white border-white hover:bg-white hover:text-gray-500"
          } duration-500 border-[2px] hover:border-gray-500`}
          onClick={addToCart}
        >
          <p>{isInCart ? "In the cart" : "Add to cart"}</p>
        </CustomBtn>

        <CustomBtn
          className={`border-[2px] duration-500 ${
            isInFavorites
              ? "bg-red-500 text-white border-red-500"
              : "border-black text-black hover:bg-gray-500 hover:border-gray-500 hover:text-white"
          }`}
          onClick={addToFavorites}
        >
          <p>{isInFavorites ? "Favourites" : "Add to favourites"}</p>
        </CustomBtn>
      </div>
    </div>
  );
};

export default ProductSettings;
