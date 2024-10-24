import { FC } from "react";
import SizeItem from "../SizeItem";

interface SizeGridProps {
  sizes: { size: string }[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const SizeGrid: FC<SizeGridProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {sizes.map((size) => (
        <SizeItem
          key={size.size}
          size={size.size}
          isSelected={selectedSize === size.size}
          onClick={() => setSelectedSize(size.size)}
        />
      ))}
    </div>
  );
};

export default SizeGrid;
