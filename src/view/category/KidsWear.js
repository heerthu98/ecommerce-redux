import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/cards/ProductCard";
import { filterProductsByCategory } from "../../components/store/productsSlice";

function KidsWear() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filterProductsByCategory("kids clothing"));
  }, [dispatch]);

  return (
    <div>
      <h2>Kids Wear</h2>
      <ProductCard products={filteredProducts} />
    </div>
  );
}

export default KidsWear;
