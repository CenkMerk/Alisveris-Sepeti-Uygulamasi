import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./control/CartSlice";

function App() {

  const cartItem = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItem]);

  return (
    <div className="d-flex justify-content-center p-2">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
