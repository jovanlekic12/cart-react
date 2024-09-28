import React from "react";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
function Phone(props) {
  const { id, title, price, image } = props;
  const [amount, setAmount] = useState(1);
  return (
    <li className="list__item">
      <img src={image} alt="404" className="image" />
      <div className="title__container">
        <h6 className="title">{title}</h6>
        <p className="price">{price}$</p>
        <button className="btn">remove</button>
      </div>
      <div className="amount__container">
        <FaAngleUp />
        <h5 className="amount">{amount}</h5>
        <FaAngleDown />
      </div>
    </li>
  );
}

export default Phone;
