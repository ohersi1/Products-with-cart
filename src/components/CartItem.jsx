import React from "react";
import removeImg from "../assets/images/icon-remove-item.svg";
import "./CartItem.css";

const CartItem = ({ product, count }) => {
  return (
    <div className="cart_item_div">
      <h4 className="h4_bold">{product.title}</h4>
      <div className="price_div">
        <span className="h4_bold">{count}x</span>
        <span className="h4_bold">@ £{product.price.toFixed(2)}</span>
        <span className="h4_bold">£{(count * product.price).toFixed(2)}</span>
      </div>
      <img src={removeImg} alt="" />
    </div>
  );
};

export default CartItem;
