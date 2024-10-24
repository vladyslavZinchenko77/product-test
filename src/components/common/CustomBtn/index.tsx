import React, { FC } from "react";

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const CustomBtn: FC<CustomButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 uppercase text-bold  ${className}`}
    >
      {children}
    </button>
  );
};
export default CustomBtn;
