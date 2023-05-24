import React from "react";
import "../style/ProductItem.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../control/CartSlice";

function ProductItem(item) {
  const [first, setfirst] = useState(item.img1);
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex flex-column align-items-center gap-2"
      style={{ width: "200px" }}
      onMouseEnter={() => setfirst(item.img2)}
      onMouseLeave={() => setfirst(item.img1)}
    >
      <img src={first} alt="" width="100%" />
      <h5 style={{ fontWeight: "400" }}>{item.title}</h5>
      <h6 style={{ fontWeight: "700" }}>{item.price} TL</h6>
      <button
        className="AddCartButton"
        onClick={() => {
          dispatch(addItem(item));
        }}
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductItem;
