import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrease = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };
  
  return (
    <div>
      <i>
        <TiMinus onClick={() => decrease()} />
        {quantity}
        <FaPlus onClick={() => increase()} />
      </i>
    </div>
  );
}
export default ProductQuantity;