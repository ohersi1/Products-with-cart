import React from 'react';
import './ConfirmedCartItem.css'

const ConfirmedCartItem = ({ product, count }) => {
    let image = product.images.thumbnail;
  return (
    <div className="grid_confirmed_items">
      <img src={image} alt="" />
      <h4 className="h4_bold">{product.title}</h4>
      <h4 className="h4_bold">{count}x</h4>
      <h4>@£{product.price.toFixed(2)}</h4>
      <h3>£{(count * product.price).toFixed(2)}</h3>
    </div>
  )
}

export default ConfirmedCartItem
