import React from "react";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import decrementImg from "../assets/images/icon-decrement-quantity.svg";
import incrementImg from "../assets/images/icon-increment-quantity.svg";
import "./Card.css";

const Card = ({ product, decrement, increment, count }) => {
  let { title, category, price, image, id } = product;

  return (
    <div className="card">
      <div className="img_wrapper">
        <img className="dessert_img" src={image} alt="" />
        {count === 0 ? (
          <button onClick={() => increment(id)}>
            <img src={cartIcon} alt="" />
            <span className="h4_bold">Add to Cart</span>
          </button>
        ) : (
          <button className="btn-2">
            <img onClick={() => decrement(id)} src={decrementImg} alt="" />
            <span className="h4_bold">{count}</span>
            <img onClick={() => increment(id)} src={incrementImg} alt="" />
          </button>
        )}
      </div>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <h3 className="price">£{price.toFixed(2)}</h3>
    </div>
  );
};

export default Card;
