import React from "react";
import NewsMainTitle from "./../NewsMainTitle/NewsMainTitle";
import Description from "../../../../shared/ui/Description/Description";
import { Image } from "react-bootstrap";
import NewsItemLink from "../NewsItemLink/NewsItemLink";
import {
  newsImage,
  newsImageWrapper,
  contentWrapper,
  textWrapper,
  newsTitle,
  newsDescription,
  newsLink,
} from "./NewsMainItem.module.css";

function NewsMainItem({ image, title, description, link, newsId }) {
  return (
    <div className={contentWrapper}>
      <div className={newsImageWrapper}>
        <Image src={image} className={newsImage} />
      </div>
      <div className={textWrapper}>
        <div className={newsTitle}>
          <NewsMainTitle title={title} />
        </div>
        <div className={newsDescription}>
          <Description text={description} />
        </div>
        <div className={newsLink}>
          <NewsItemLink link={link} newsId={newsId} />
        </div>
      </div>
    </div>
  );
}

export default NewsMainItem;
