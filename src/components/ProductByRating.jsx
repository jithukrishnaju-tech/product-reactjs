import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListOfProduct from "./listProduct";

const ProductsByRating = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const handleRatingFilter = (rating) => {
    setSelectedRating(rating);
    const filtered = products.filter(
      (product) => Math.floor(product.rating) === rating
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleResetFilter = () => {
    setFilteredProducts(products);
    setSelectedRating(null);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="rating-filter-container">
        <div className="rating-filter-sidebar">
          <h3 className="filter-title">Filter by Rating</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="rating-option">
              <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                checked={selectedRating === rating}
                onChange={() => handleRatingFilter(rating)}
              />
              <label htmlFor={`rating-${rating}`}>{rating} Stars</label>
            </div>
          ))}
          <button className="reset-button" onClick={handleResetFilter}>
            Reset Filter
          </button>
        </div>

        <div className="products-container-new product-pagination">
          {currentProducts.map((productData) => (
            <Link
              to={`/product/${productData?.id}`}
              key={productData.id}
              className="link-class"
            >
              <ListOfProduct productData={productData} />
            </Link>
          ))}
        </div>
      </div>
      <div className="pagination-controls">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductsByRating;
