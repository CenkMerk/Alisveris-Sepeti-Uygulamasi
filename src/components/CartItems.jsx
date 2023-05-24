import React from "react";
import "../style/CartItem.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increase, descrease, removeItem } from "../control/CartSlice";

function CartItems({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-row gap-2 align-items-center shadow-lg p-2">
      <div style={{ height: "100px" }}>
        <img src={img} alt="" height="100%" />
      </div>
      <div className="d-flex flex-column h-100 justify-content-evenly">
        <h6>{title}</h6>
        <h6 className="text-warning">{price}</h6>
      </div>
      <div className="d-flex flex-column align-items-center ms-auto h-100 justify-content-between gap-2">
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <AiOutlinePlus size={22} />
        </button>
        <p className="m-0 fw-bold">{quantity}</p>
        {quantity > 1 ? (
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              dispatch(descrease(id));
            }}
          >
            <AiOutlineMinus size={22} />
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Sil
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItems;
