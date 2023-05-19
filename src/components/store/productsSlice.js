import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProductsByCategory: (state, action) => {
      const category = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    },
  },
});

export const { setProducts, filterProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;
