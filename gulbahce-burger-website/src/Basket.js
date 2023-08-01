import React, { useContext } from 'react';
import { BasketContext } from './BasketContext';
import BasketItem from './BasketItem';
import { Header } from "./Header";
import { Footer } from './Footer';
import './Basket.css';

function BasketTotal() {
  const { totalBasketPrice } = useContext(BasketContext);
    return (
      <div className="basket-total">
        <div className="basket-image"></div>
        <div className="text-class">Basket Total: <span className="red-text">{totalBasketPrice} TL</span></div>
        <div className="purchase-button">
          <div className="purchase-text">Purchase</div>
        </div>
      </div>
    );
}

function BasketContents() {
  const { basketItems } = useContext(BasketContext);

  return (
      <div className="basket-contents">
          {basketItems.map((item, index) => (
              <BasketItem key={index} item={item} />
          ))}
      </div>
  );
}
  

export default function Basket() {
  return (
    <div>
    <div id="main" className="main-container">
      <Header />
      <BasketTotal />
      <BasketContents />
    </div>
    <Footer />
    </div>
  );
}

