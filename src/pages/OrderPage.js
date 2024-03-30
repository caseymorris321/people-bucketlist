import React from "react";
import ProductRow from "../components/ProductRow.js";
import products from "../data/Products.js";

function OrderPage() {
  return (
    <>
      <h2>Order</h2>
      <article>
        <p>On this page, you can order from a list of products. For demonstration purposes only.</p>
        <legend style={{ textAlign: 'center', marginTop: '20px'}}>Pet Products for Sale</legend>
        <table id="productTable">
          <caption>Order one product</caption>
          <thead>
            <tr>
              <th>Company</th>
              <th>Product</th>
              <th>Today's Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <ProductRow
                key={i}
                company={product.company}
                product={product.product}
                price={product.price}
              />
            ))}
          </tbody>
        </table>

      </article>
    </>
  );
}
export default OrderPage;
