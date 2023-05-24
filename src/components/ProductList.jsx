import React from "react";
import ProductItem from "./ProductItem";
import ProductItems from "../ProductItems";

function ProductList() {
  return (
    //bu kısımda her bir ürünümüzün bilgilerini göstermek için
    //ProductItem componentine gönderdik
    <div className="d-flex flex-wrap gap-2 justify-content-center pt-5">
      {ProductItems.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductList;
