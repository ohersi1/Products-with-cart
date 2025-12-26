import React from "react";
import "./ConfirmedCartItem.css";

const ConfirmedCartItem = ({ product, count }) => {
  let image = product.images.thumbnail;
  return (
    
      <div className="confirmed-items">
        <img className="thumbnail-img" src={image} alt="" />
        <div className="title-quantity-price">
          <h4 className="text-preset-4-bold modal-dessert-title">
            {product.title}
          </h4>
          <div className="quantity-price">
            <p className="text-preset-4-bold modal-quantity-of-dessert">
              {count}x
            </p>
            <p className="text-preset-4-bold modal-price-of-dessert">
              @£{product.price.toFixed(2)}
            </p>
          </div>
        </div>
        <p className="text-preset-3 modal-dessert-total-price">
          £{(count * product.price).toFixed(2)}
        </p>
      </div>
    
  );
};

export default ConfirmedCartItem;
