import React, { useEffect, useState } from "react";
import NewsMainItem from "../../ui/NewsMainItem/NewsMainItem";
import route from "../../utils/routerconsts";
import { Col } from "react-bootstrap";
import {newsMainItems} from './LastThreeNewsList.module.css'

function LastThreeNewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        image: "../src/widgets/LastThreeNews/assets/images/news1.jpg",
        title: "Открытие летнего сезона",
        description: "Объявляем открытие нового летнего сезона",
        link: route.newsList,
      },
      {
        id: 2,
        image: "../src/widgets/LastThreeNews/assets/images/news2.jpg",
        title: "Закытие весеннего сезона",
        description: "Объявляем закрытие весеннего сезона",
        link: route.newsList,
      },
      {
        id: 3,
        image: "../src/widgets/LastThreeNews/assets/images/news3.png",
        title: "Скидки перед концом сезона",
        description:
          "Перед закрытием весеннего сезона объявляем скидки 30% на подъемники",
        link: route.newsList,
      },
    ];
    setNews(data);
  }, []);

  return (
    <div  className={newsMainItems}>
      {news.map(({ image, title, description, link, id }) => (
        <Col xs={4} key={id}>
          <NewsMainItem
            image={image}
            title={title}
            description={description}
            link={link}
            newsId={id}
          />
        </Col>
      ))}
    </div>
  );
}

export default LastThreeNewsList;
