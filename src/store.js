import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});