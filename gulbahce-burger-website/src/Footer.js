import React from 'react';
import instagramIcon from "./extra_pictures/instagram_emblem.webp";
import phoneIcon from "./extra_pictures/phone emblem.jpg";
import emailIcon from "./extra_pictures/mail_emblem.png";
import twitterIcon from "./extra_pictures/twitter_emblem.jpg";
import './App.css';



let labelColor = "#001AFF";


const toogleContent = (contentDiv, otherContentDiv, button, otherButton) => {
    const content = document.querySelector(contentDiv);
    const otherContent = document.querySelector(otherContentDiv);
    const btn = document.querySelector(button);
    const otherBtn = document.querySelector(otherButton);
  
    if (content.style.display === 'none') {
      content.style.display = 'block';
      btn.style.color = "#EB00FF";
      if (otherContent.style.display === 'block') {
          otherContent.style.display = 'none';
          otherBtn.style.color =  labelColor;
      }
  } 
  else {
      content.style.display = 'none';
      btn.style.color = labelColor;
  }
  }

function ContactInfo() {
    return (
      <div>
            <div id="contact-info-content" className="contact-content">
            <p>
              <span className="phone-icon-container">
                <img className="phone-icon" src={phoneIcon} alt="Phone" />
              </span>
              <span className="phone-text">+90 123 456 7788</span>
              <span className="instagram-icon-container">
                <img className="instagram-icon" src={instagramIcon} alt="Instagram" />
              </span>
              <span className="instagram-text">instagram.com/gbahceburger</span>
              <span className="twitter-icon-container">
                <img className="twitter-icon" src={twitterIcon} alt="Twitter" />
              </span>
              <span className="twitter-text">twitter.com/gbahceburger</span>
              <span className="email-icon-container">
                <img className="email-icon" src={emailIcon} alt="Email" />
              </span>
              <span className="email-text">gbahceburger@mail.com</span>
            </p>
          </div>
      </div>
    );
  }
  
  function Location() {
    return (
      <div id="location-content" className="location-content">
          <div className="fake-map"></div>
          <span className="address-text">Address: <br/> 12087 Sk. Gülbahçe/Urla/İzmir</span>
      </div>
  );
  }

  export function Footer() {
    return (
      <div id="last" className="last-div">
        <span id="contact" className="contact" onClick={() => toogleContent(".contact-content", ".location-content", ".contact", ".location")}>Contact Info</span>
        <span id="location" className="location" onClick={() => toogleContent(".location-content", ".contact-content", ".location", ".contact")}>Location</span>
        <Location />
        <ContactInfo />
      </div>
    );
  }