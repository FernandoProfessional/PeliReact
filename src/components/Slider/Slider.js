import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

const handleDragStart = (e) => e.preventDefault();

const idSlider = {
  first: '508442',
  second: '581734',
  third: '433502'
}

const items = [
  <div className="carouselItem" onClick={() => {console.log(idSlider.first)}}>
    <img
      className="carouselItem__img"
      src={process.env.PUBLIC_URL + "/img/slider/soul/poster.jpg"}
      onDragStart={handleDragStart}
      alt="soul"
    />
    <img       
      className="frontPoster"
      src={process.env.PUBLIC_URL + "/img/slider/soul/scale.png"} alt="soul"/>
  </div>,
  <div className="carouselItem" onClick={() => {console.log(idSlider.second)}}>
    <img
      className="carouselItem__img"
      src={process.env.PUBLIC_URL + "/img/slider/nomaland/poster.jpg"}
      onDragStart={handleDragStart}
      alt="nomaland"
    />
    <img       
      className="frontPoster"
      src={process.env.PUBLIC_URL + "/img/slider/nomaland/scale.png"} alt="nomaland"/>
  </div>,

  <div className="carouselItem" onClick={() => {console.log(idSlider.third)}}>
    <img
      className="carouselItem__img"
      src={process.env.PUBLIC_URL + "/img/slider/eldiaqvendra/poster.jpg"}
      onDragStart={handleDragStart}
      alt="eldiqevendra"
    />
    <img       
      className="frontPoster3"
      src={process.env.PUBLIC_URL + "/img/slider/eldiaqvendra/scale.png"} alt="eldiqevendra"/>
  </div>,
];


export const Slider = () => {
  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      items={items}   
    />
  );
};
