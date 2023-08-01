import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Basket from './Basket';
import MenuItemPage from './MenuItemPage';
import cheeseburger from "./menu_pictures/cheeseburger.jpg";
import onion_rings from "./menu_pictures/onion_rings.jpg";
import beef_burger from "./menu_pictures/beef_burger.jpg";
import chicken_burger from "./menu_pictures/chicken_burger.jpg";
import fizzy_drink from "./menu_pictures/fizzy_drink.jpg";
import fries from "./menu_pictures/fries.jpg";
import ice_cream from "./menu_pictures/ice_cream.jpg";
import lemonade from "./menu_pictures/lemonade.jpg";
import pizza_slice from "./menu_pictures/pizza_slice.jpg";
import water from "./menu_pictures/water.jpg";
import chicken_legs from "./menu_pictures/chicken_legs.jpg";
import { Header } from "./Header";
import { Footer } from './Footer';
import { BasketIcon } from './BasketIcon';
import { BasketProvider } from './BasketContext';


let labelColor = "#001AFF";

function AboutUs() {
  return (
      <div id="about-us-content" className="about-us-content">
        <span>
          Gülbahçe Burger is a fast food joint in Urla/İzmir. It opened for
          business in 2023.
        </span>
      </div>  
  );
}

function AboutUsDiv() {
  function toggleAboutUs() {
    const aboutUsContent = document.getElementById("about-us-content");
    const aboutUsButton = document.getElementById("about-us");
    const downGrey = document.getElementById("down-grey");
    if (aboutUsContent.style.display === "none") {
      aboutUsContent.style.display = "block";
      aboutUsButton.style.color = "#EB00FF";
      downGrey.style.marginTop = "61px";
    } else {
      aboutUsContent.style.display = "none";
      aboutUsButton.style.color = labelColor;
      downGrey.style.marginTop = "0px";
    }
  };
  return (
    <span id="about-us" className="about-us" onClick={toggleAboutUs}>
    About Us
  </span>
  );
}

function NameBox() {
  const buttonRef = useRef(null);
  const textboxRef = useRef(null);
  const labelRef = useRef(null);
  const [name, setName] = useState(localStorage.getItem("name") || '');

  useEffect(() => {
    buttonRef.current.addEventListener('click', function() {
      var regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/;
      var name = textboxRef.current.value;
      if (!regex.test(name)) {
        textboxRef.current.value = ""; 
        buttonRef.current.style.backgroundColor = "#FF4545";
      } 
      else { 
        setName(name);
        localStorage.setItem('name', name);
        labelRef.current.innerHTML = "Welcome, " + name;
        textboxRef.current.remove();
        buttonRef.current.remove();
      }
    });
  }, []);

  useEffect(() => {
    if (name) {
      labelRef.current.innerHTML = "Welcome, " + name;
      textboxRef.current && textboxRef.current.remove();
      buttonRef.current && buttonRef.current.remove();
    }
  }, [name]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('name');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div id="down-grey" className="down-grey">
      <p ref={labelRef} id="label" className="text0">
        Please enter your name for a personalized experience:
      </p>
      <input ref={textboxRef} id="txtbox" type="text" className="text-box" />
      <button ref={buttonRef} id="button" className="button">
        Submit
      </button>
    </div>
  )
}


function MenuItem({ name, price, imageURL, background }) {
  const itemName = encodeURIComponent(name);
  return (
    <Link to={`/menu/${itemName}`} className="menu-item" style={{background: background}}>
      <img className="menu-image" src={imageURL} alt={name} />
      <div style={{display: 'flex', justifyContent: 'space-between', width: '390px'}}>
        <p className="itemName" style={{ position: 'relative', left: '20px', top: '10px' }}>{name}</p>
        <p className="itemPrice" style={{ position: 'relative', top: '10px' }}>{price}</p>
      </div>
    </Link>
  );
}

function MenuList({ menuItems }) {
  return (
    <div id="menu-list" className="menu-list">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} price={`${item.price} TL`} />
      ))}
    </div>
  );
}


export default function App() {
  const menuItems = [
    {name: 'Cheeseburger', price: 70, imageURL: cheeseburger},
    {name: 'Onion Rings', price: 30, imageURL: onion_rings},
    {name: 'French Fries', price: 25, imageURL: fries},
    {name: 'Chicken Burger', price: 60, imageURL: chicken_burger},
    {name: 'Fizzy Drink', price: 20, imageURL: fizzy_drink},
    {name: 'Water', price: 10, imageURL: water},
    {name: 'Beef Burger', price: 90, imageURL: beef_burger},
    {name: 'Chicken Legs', price: 45, imageURL: chicken_legs},
    {name: 'Soft Serve Ice Cream', price: 15, imageURL: ice_cream},
    {name: 'Lemonade', price: 13, imageURL: lemonade},
    {name: 'Pizza Slice', price: 50, imageURL: pizza_slice},
  ];

  return (
    <BasketProvider>
    <Router>
      <div id="main" className="main-container">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <BasketIcon />
              <AboutUsDiv />
              <NameBox />
              <AboutUs />
              <MenuList menuItems={menuItems} />
              <Footer />
            </>
          } />
          <Route path="/menu/:itemName" element={<MenuItemPage menuItems={menuItems} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </Router>
    </BasketProvider>

  );
}
