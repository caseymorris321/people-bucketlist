import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ company, product, price }) {
    const [quantity, setQuantity] = useState(0);
  return (
    <tr>
      <td>{company}</td>
      <td>{product}</td>
      <td>${price}</td>
      <td>
        <ProductQuantity quantity={quantity} setQuantit= {setQuantity}/>
      </td>
    </tr>
  );
}

export default ProductRow;
