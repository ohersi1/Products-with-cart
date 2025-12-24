import React from "react";
import removeImg from "../assets/images/icon-remove-item.svg";
import "./CartItem.css";

const CartItem = ({ product, count, deleteItem }) => {
  return (
    
    <div className="cart_item_div">
      <div>
        <h4 className="text-preset-4-bold cart-dessert-title">{product.title}</h4>
        <div className="cart-total-price-item-div">
          <span className="text-preset-4-bold cart-quantity-of-dessert">{count}x</span>
          <span className="text-preset-4 cart-price-of-dessert">
            @ £{product.price.toFixed(2)}
          </span>
          <span className="text-preset-4-bold cart-dessert-total-price">
            £{(count * product.price).toFixed(2)}
          </span>
        </div>
      </div>
      <img onClick={() => deleteItem(product.id)} src={removeImg} alt="" />
    </div>
    
  );
};

export default CartItem;
