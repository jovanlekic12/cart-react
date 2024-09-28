import React from "react";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
function Phone(props) {
  const { id, title, price, image, handleDeletePhone, amount, increaseAmount } =
    props;

  return (
    <li className="list__item">
      <img src={image} alt="404" className="image" />
      <div className="title__container">
        <h6 className="title">{title}</h6>
        <p className="price">{price}$</p>
        <button onClick={() => handleDeletePhone(id)} className="btn">
          remove
        </button>
      </div>
      <div className="amount__container">
        <FaAngleUp onClick={increaseAmount} />
        <h5 className="amount">{amount}</h5>
        <FaAngleDown />
      </div>
    </li>
  );
}

export default Phone;
