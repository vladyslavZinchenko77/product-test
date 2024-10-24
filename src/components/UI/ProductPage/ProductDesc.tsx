import { FC } from "react";

interface ProductDescProps {
  className?: string;
  descriptionText: string;
}

const ProductDesc: FC<ProductDescProps> = ({ className, descriptionText }) => {
  return (
    <div className={`text-center ${className}`}>
      <p>{descriptionText}</p>
    </div>
  );
};

export default ProductDesc;
