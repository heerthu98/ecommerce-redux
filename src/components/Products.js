// import React, { useEffect, useState } from "react";
// import ProductCard from "./cards/ProductCard";

// function Products() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, []);
//   return (
//     <div>
//       <div className="container">
//         <div className="inner">
//           <ProductCard product={product} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "./store/productsSlice";
import ProductCard from "./cards/ProductCard";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  console.log("Products:", products); // Check the value of products

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="inner">
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;
