import { createSlice } from "@reduxjs/toolkit";

const storedItem = localStorage.getItem("cartItem");
const initialState = {
  cartItem: storedItem ? JSON.parse(storedItem) : [],
};

const saveCart = (cart) => {
  localStorage.setItem("cartItem", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.cartItem.push({
          id: newItem.id,
          title:newItem.title,
          des: newItem.del,
          price: newItem.price,
          rat: newItem.rat,
          img: newItem.img,
          quantity: newItem.quantity || 1,
        });
      }
      saveCart(state.cartItem);
    },
    deleteFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id);
      saveCart(state.cartItem);
    },
    updateToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItem.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveCart(state.cartItem);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, updateToCart } = cartSlice.actions;
