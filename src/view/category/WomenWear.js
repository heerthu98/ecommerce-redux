import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/cards/ProductCard";
import { filterProductsByCategory } from "../../components/store/productsSlice";

function WomenWear() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    // Dispatch the action to filter products by category
    dispatch(filterProductsByCategory("women's clothing"));
  }, [dispatch]);

  return (
    <div>
      <h2>Women's Wear</h2>
      <ProductCard products={filteredProducts} />
    </div>
  );
}

export default WomenWear;
