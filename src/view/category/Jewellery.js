import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByCategory } from "../../components/store/productsSlice";
import ProductCard from "../../components/cards/ProductCard";

function Jewellery() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filterProductsByCategory("jewelery"));
  }, [dispatch]);
  return (
    <div>
      <ProductCard products={filteredProducts} />
    </div>
  );
}

export default Jewellery;
