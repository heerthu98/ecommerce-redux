import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    // removeParticularProduct(state, action) {
    //   const index = state.findIndex(
    //     (cartItem) => cartItem.id === action.payload
    //   );
    //   if (index !== -1) {
    //     if (state[index].count > 1) {
    //       state[index].count -= 1;
    //     } else {
    //       state.splice(index, 1);
    //     }
    //   }
    // },
  },
});

export const { add, remove, removeParticularProduct } = cartSlice.actions;
export default cartSlice.reducer;
