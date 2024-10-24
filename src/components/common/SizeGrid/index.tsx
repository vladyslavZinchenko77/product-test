import { FC } from "react";
import SizeItem from "../SizeItem";

interface SizeGridProps {
  sizes: { size: string }[];
}
const SizeGrid: FC<SizeGridProps> = ({ sizes }) => {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {sizes.map((size) => (
        <SizeItem key={size.size} size={size.size} />
      ))}
    </div>
  );
};

export default SizeGrid;
