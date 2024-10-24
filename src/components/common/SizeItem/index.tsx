import { FC } from "react";

interface SizeItemProps {
  size: string;
}

const SizeItem: FC<SizeItemProps> = ({ size }) => {
  return (
    <div className="w-[86px] h-[46px] duration-500 cursor-pointer bordered border-[1px] flex justify-center items-center hover:border-[2px] hover:border-black">
      <p>{size}</p>
    </div>
  );
};

export default SizeItem;
