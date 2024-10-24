import { FC } from "react";

interface SizeItemProps {
  size: string;
  isSelected: boolean;
  onClick: () => void;
}

const SizeItem: FC<SizeItemProps> = ({ size, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[86px] h-[46px] cursor-pointer border-[1px] flex justify-center items-center duration-500 
        ${
          isSelected
            ? "border-[2px] border-black font-bold"
            : "hover:border-[2px] hover:border-black"
        }`}
    >
      <p>{size}</p>
    </div>
  );
};

export default SizeItem;
