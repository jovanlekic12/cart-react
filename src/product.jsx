import React from "react";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
function Product(props) {
  const {
    id,
    title,
    price,
    image,
    amount,
    handleDeleteProduct,
    increaseQuantity,
  } = props;
  return (
    <li className="list__item">
      <img src={image} alt="404" className="image" />
      <div className="title__container">
        <h6 className="title">{title}</h6>
        <p className="price">{price}$</p>
        <button onClick={() => handleDeleteProduct(id)} className="btn">
          remove
        </button>
      </div>
      <div className="amount__container">
        <FaAngleUp onClick={() => increaseQuantity(id)} />
        <h5 className="amount">{amount}</h5>
        <FaAngleDown />
      </div>
    </li>
  );
}

export default Product;
