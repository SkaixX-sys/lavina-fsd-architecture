import React from "react";
import { Carousel } from "react-bootstrap";
import {
  callUsNumberWrapper,
  callUs,
  number,
  sliderTitle,
  sliderTagline,
  sliderItem,
  sliderItemImage,
  sliderCaption,
} from "./MainSlider.module.css";

function MainSlider({ swiperData }) {
  if (!swiperData) {
    swiperData = [
      {
        id: "1",
        title: "ЛЕТНЕЕ КАТАНИЕ ЕЩЕ АКТУАЛЬНО",
        tagline: "думаешь лето - не сезон катания?",
        src: "/src/shared/assets/bigImages/riv05151_powder_skiing-min1.png",
      },
      {
        id: "2",
        title: "ОТКРЫТИЕ ЛЕТНЕГО СЕЗОНА",
        tagline: "у нас наступил летний сезон",
        src: "/src/shared/assets/bigImages/riv05151_powder_skiing-min2.png",
      },
      {
        id: "3",
        title: "СКИДКИ НА ПРОКАТ",
        tagline: "в честь открытия сезона",
        src: "/src/shared/assets/bigImages/3.5_homepage_hero.jpg",
      },
    ];
  }
  return (
    <Carousel
      className="mt-3 position-relative"
      controls={false}
      interval={6000}
    >
      {swiperData.map((slider) => (
        <Carousel.Item key={slider.id} className={sliderItem}>
          <img className={sliderItemImage} src={slider.src} alt={slider.title} />
          <div className={callUsNumberWrapper}>
            <p className={callUs}>Позвони нам</p>
            <p className={number}>№ 8-800-555-35-35</p>
          </div>
          <Carousel.Caption className={sliderCaption}>
            <h3 className={sliderTitle}>{slider.title}</h3>
            <p className={sliderTagline}>{slider.tagline}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainSlider;
