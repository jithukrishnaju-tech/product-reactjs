import React from "react";

const ListOfProduct = ({ productData }) => {
  return (
    <div className="product-box">
      <img
        src={productData.thumbnail}
        className="product-img"
        alt={productData.title}
      />
      <div className="product-data">
        <strong>{productData.title}</strong>
        <span>${productData.price}</span>
      </div>
    </div>
  );
};

export default ListOfProduct;
