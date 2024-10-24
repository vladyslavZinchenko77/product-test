import { FC } from "react";

interface ProductDescProps {
  className?: string;
}

const ProductDesc: FC<ProductDescProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        We didn't invent the remix—but considering the material we get to
        sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8,
        making them into a completely new shoe that celebrates MJ's first 3-peat
        championship run. With leather, textile and nubuck details, these
        sneakers honour one legacy while encouraging you to cement your own.
      </p>
    </div>
  );
};

export default ProductDesc;
