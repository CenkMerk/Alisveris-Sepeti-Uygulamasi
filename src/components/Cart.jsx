import React from "react";
import "../style/Cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../control/CartSlice";

function Cart() {
  const { selectItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Ödenen Tutar: ${total} TL`);
  };

  return (
    <div className="CartContainer">
      <button
        className="btn btn-dark position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <AiOutlineShoppingCart size={30} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning">
          {quantity}
        </span>
      </button>
      <div
        className="offcanvas offcanvas-end bg-dark text-light"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Sepetim</h5>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          <div className="CartItemContainer">
            {selectItems.map((item) => {
              return <CartItems {...item} key={item.id} />;
            })}
          </div>
          <div className="d-flex flex-column gap-4 mt-auto p-2 border-top">
            <div className="d-flex justify-content-between ">
              <h4>Sepet Tutarı</h4>
              <h4 className="text-warning">{total} TL</h4>
            </div>
            <button
              className="btn btn-outline-warning p-2"
              style={{ color: "white", fontWeight: "600" }}
              onClick={HandleClick}
            >
              Ödeme Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
