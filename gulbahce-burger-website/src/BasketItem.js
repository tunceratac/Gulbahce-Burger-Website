import React from 'react';
import './BasketItem.css';

export default function BasketItem({ item }) {
  return (
    <div className='basket-item'>
      <div className='basket-item-name'>{item.name}</div>
      <div className='basket-item-option'>{item.selectedOption}</div>
      <div className='basket-item-quantity'>Quantity: {item.quantity}</div>
      <div className='basket-item-price'>{item.totalPrice} TL</div>
    </div>
  );
}
