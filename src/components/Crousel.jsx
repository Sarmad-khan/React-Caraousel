import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Crousel.css";


export const Crousel = ({ data }) => {
  const [slide, setSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((Slide) => (Slide === data.length - 1 ? 0 : Slide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="carousel">
      <h1 className="logo ">Logo</h1>
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>

      <div className="social-media">
        <FaFacebookF className="social-media-icon" />
        <FaInstagram className="social-media-icon" />
        <FaXTwitter className="social-media-icon" />
      </div>
  
    </div>
  );
};