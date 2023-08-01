import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import basketIcon from "./extra_pictures/basket.png";
import { BasketContext } from "./BasketContext";

export function BasketIcon() {
  const { totalBasketPrice } = useContext(BasketContext);
    return (
      <div className="basket-rectangle">
        <span className="basket-ttl">Basket Total: <span className="red-text">{totalBasketPrice} TL</span> </span>
        <Link to="/basket">
          <img className="basket-icon" src={basketIcon} alt="basket" />
        </Link>
      </div>
    );
  }

