import React from "react";

import Swiper from "../../widgets/MainSlider/index";
import SkiLikeYouWant from "../../widgets/SkiLikeYouWant/index";
import LastThreeNews from "./../../widgets/LastThreeNews/index";
import MainServiceList from './../../widgets/MainServiceList/index';
function Main() {
  return (
    <>
      <Swiper />
      <SkiLikeYouWant />
      <LastThreeNews />
      <MainServiceList/>
    </>
  );
}

export default Main;
