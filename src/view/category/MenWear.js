import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProductsByCategory } from "../../components/store/productsSlice";
import ProductCard from "../../components/cards/ProductCard";

function MenWear() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filterProductsByCategory("men's clothing"));
  }, [dispatch]);

  return (
    <div>
      <h2>Men's Wear</h2>
      <ProductCard products={filteredProducts} />
    </div>
  );
}

export default MenWear;
