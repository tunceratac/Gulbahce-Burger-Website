import React, { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basketItems, setBasketItems] = useState([]);
    const [totalBasketPrice, setTotalBasketPrice] = useState(0);

    useEffect(() => {
        console.log(basketItems);

        // totalPrice'ı toplama işlemi
        const totalPrice = basketItems.reduce((total, item) => total + item.totalPrice, 0);
        setTotalBasketPrice(totalPrice);

    }, [basketItems]);
  
    const addToBasket = (item, selectedOption) => {
      const existingItemIndex = basketItems.findIndex(
        (basketItem) =>
          basketItem.name === item.name &&
          (selectedOption ? selectedOption.name : 'Standard') === basketItem.selectedOption
      );
  
      if (existingItemIndex > -1) {
        const newBasketItems = [...basketItems];
        newBasketItems[existingItemIndex] = {
          ...newBasketItems[existingItemIndex],
          quantity: newBasketItems[existingItemIndex].quantity + 1,
          totalPrice:
            newBasketItems[existingItemIndex].totalPrice +
            item.price +
            (selectedOption ? selectedOption.price : 0),
        };
  
        setBasketItems(newBasketItems);
      } else {
        setBasketItems((currentItems) => [
          ...currentItems,
          {
            ...item,
            selectedOption: selectedOption ? selectedOption.name : 'Standard',
            quantity: 1,
            totalPrice: item.price + (selectedOption ? selectedOption.price : 0),
          },
        ]);
      }
    };
  
    return (
      <BasketContext.Provider value={{ basketItems, addToBasket, totalBasketPrice }}>
        {children}
      </BasketContext.Provider>
    );
}
