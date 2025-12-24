import React from "react";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import decrementImg from "../assets/images/icon-decrement-quantity.svg";
import incrementImg from "../assets/images/icon-increment-quantity.svg";
import "./Card.css";

const Card = ({ product, decrement, increment, count }) => {
  let { title, category, price, images, id } = product;

  return (
    <div className="card">
      <div className="img_wrapper">
        <picture>
          <source srcSet={images.desktop} media="(min-width: 1024px)" />

          <source srcSet={images.tablet} media="(min-width: 768px)" />

          <img src={images.mobile} alt={title} className={count > 0 ? "dessert_img active" : "dessert_img"} />
        </picture>
        {count === 0 ? (
          <button onClick={() => increment(id)}>
            <img src={cartIcon} alt="" />
            <span className="text-preset-4-bold">Add to Cart</span>
          </button>
        ) : (
          <button className="btn-2">
            <img onClick={() => decrement(id)} src={decrementImg} alt="" />
            <span className="text-preset-4-bold">{count}</span>
            <img onClick={() => increment(id)} src={incrementImg} alt="" />
          </button>
        )}
      </div>
      <h3 className="text-preset-4 card-dessert-category">{category}</h3>
      <p className="text-preset-3 card-dessert-name">{title}</p>
      <p className="text-preset-3 card-price">£{price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
