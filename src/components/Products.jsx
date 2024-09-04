import React, { useState, useEffect } from "react";
import ListOfProduct from "./listProduct";

import Shimmer from "../shimmer/shimmer";
import ProductsByRating from "./ProductByRating";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response?.json();
      console.log(data?.products);
      setProducts(data?.products);
    };
    fetchProducts();
  }, []);
  return products.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <Link to={"/category"}>
        <button className="category-btn">Select By Category</button>
      </Link>

      <ProductsByRating />
      {/* <div className="products-container">
        {products.map((productData) => (
          <Link
            to={`/product/${productData?.id}`}
            key={productData.id}
            className="link-class"
          >
            <ListOfProduct productData={productData} />
          </Link>
        ))}
      </div> */}
    </>
  );
};
export default Products;
