import React, { useState } from 'react';
import { Header } from "./Header";
import { Footer } from './Footer';
import { useParams } from 'react-router-dom';
import { BasketIcon } from './BasketIcon';
import './MenuItemPage.css';
import { useContext } from 'react';
import { BasketContext } from './BasketContext'; 


const options = {
  'French Fries': [
    { name: 'Small Size', price: 0 },
    { name: 'Medium Size', price: 10 },
    { name: 'Large Size', price: 20 }
  ],
  'Fizzy Drink': [
    { name: 'Cola', price: 0 },
    { name: 'Fanta', price: 0 },
    { name: 'Sprite', price: 0 }
  ],
  'Onion Rings': [
    { name: 'Single Portion', price: 0 },
    { name: 'Double Portion', price: 15 }
  ],
  'Cheeseburger': [
    { name: 'No Extra Cheese', price: 0 },
    { name: 'Add Extra Cheese', price: 20 }
  ],
  'Ice Cream': [
    { name: 'Vanilla', price: 0 },
    { name: 'Chocolate', price: 0 },
    { name: 'Strawberry', price: 5 },
    { name: 'Mint', price: 10 }
  ]
};

export default function MenuItemPage({ menuItems }) {
  const { itemName } = useParams();
  const item = menuItems.find((item) => item.name === decodeURIComponent(itemName));
  const [selectedOption, setSelectedOption] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(item.price);
  const { addToBasket } = useContext(BasketContext);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setUpdatedPrice((item.price + option.price));
  };

  const handleAddToBasket = () => {
    addToBasket(item, selectedOption);
  };


  return (
    <div>
      <div id="main" className="main-container">
        <Header />
        <BasketIcon />
        <div className="menuItemPage">
          <div className="item-detail-box-image">
            <img src={item.imageURL} alt={item.name} className="product-image" />
          </div>
          <div className="item-detail-box">
          <div className="product-details">
          <h1>{item.name}</h1>
          {options[item.name] &&
            options[item.name].map((option) => (
              <div key={option.name}>
                <label>
                  <input
                    type="radio"
                    name="selectedOption"
                    value={option.name}
                    className="option-input"
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option.name} + {option.price} TL
                </label>
              </div>
            ))}
        <p>{updatedPrice} TL</p>
    <button className="add-to-basket-button" onClick={handleAddToBasket}>Add to Basket</button>
</div>



          </div>
        </div>
    </div>
    <Footer />
  </div > 
  );
}
