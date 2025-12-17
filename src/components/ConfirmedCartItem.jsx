import React from 'react';
import './ConfirmedCartItem.css'

const ConfirmedCartItem = ({ product, count, key }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <span>{count}x</span>
      <span>@£{product.price.toFixed(2)}</span>
      <p>£{(count * product.price).toFixed(2)}</p>
    </div>
  )
}

export default ConfirmedCartItem
