import React from "react";
import { newsItemLink, arrow } from "./NewsItemLink.module.css";
import { NavLink } from "react-router-dom";

function NewsItemLink({ link, newsId }) {
  return (
    <NavLink to={link + "/" + newsId} className={newsItemLink}>
      <img
        className={arrow}
        src="./src/widgets/LastThreeNews/ui/NewsItemLink/NewsItemArrow/arrowToButton.png"
      />{" "}
      Узнать подробнее
    </NavLink>
  );
}

export default NewsItemLink;
