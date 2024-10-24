import { FC } from "react";
import SizeItem from "../SizeItem";

const SizeGrid: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-[8px]">
      <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem />
      <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem />
      <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem /> <SizeItem />
    </div>
  );
};

export default SizeGrid;
