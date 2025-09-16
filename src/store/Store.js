import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/Cartslice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});
