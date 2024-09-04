import React, { useState, useEffect } from "react";
import ListOfProduct from "./listProduct";
import Shimmer from "../shimmer/shimmer";
import { Link } from "react-router-dom";
const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);

      const categorized = data?.products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});

      setCategories(categorized);
    };

    fetchProducts();
  }, []);

  return Object.keys(categories).length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2 className="category-name">{category}</h2>
          <div className="products-container product-pagination">
            {categories[category].map((product) => (
              <Link
                to={`/product/${product?.id}`}
                key={product.id}
                className="link-class"
              >
                <ListOfProduct productData={product} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategory;
