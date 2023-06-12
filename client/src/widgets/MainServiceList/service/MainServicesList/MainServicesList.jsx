import React from "react";
import route from "../../utils/routerconst";
import ServiceItem from "../../ui/ServiceItem/ServiceItem";
import GlobalTitle from "./../../../../shared/ui/GlobalTitle/GlobalTitle";
import { serviceListWrapper } from "./MainServicesList.module.css";
import { Col } from "react-bootstrap";

function MainServicesList() {
  const services = [
    {
      id: 1,
      src: "../src/widgets/MainServiceList/assets/images/service1.jpg",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 2,
      src: "../src/widgets/MainServiceList/assets/images/service2.jpg",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 3,
      src: "../src/widgets/MainServiceList/assets/images/service3.jpg",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 4,
      src: "../src/widgets/MainServiceList/assets/images/service4.jpg",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 5,
      src: "../src/widgets/MainServiceList/assets/images/service5.png",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 6,
      src: "../src/widgets/MainServiceList/assets/images/service6.png",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
    {
      id: 7,
      src: "../src/widgets/MainServiceList/assets/images/service7.jpg",
      title: "Горнолыжные туры",
      description:
        "При покупке тура Вы получаете проживание в комфортабельных номерах, питание, безлимитное катание в период проживания, а также скидку на услуги проката.",
      link: route.serviceList,
    },
  ];

  const sortedItems = services.sort((a, b) => (a % 2) - (b % 2) || a - b);

  const column1Items = sortedItems.filter((item) => item.id % 2 !== 0);
  const column2Items = sortedItems.filter((item) => item.id % 2 === 0);

  return (
    <div className={serviceListWrapper}>
      <Col xs={6}>
        {column1Items.map((item) => (
          <div key={item.id}>
            <ServiceItem
              id={item.id}
              src={item.src}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
      </Col>
      <Col xs={6}>
        <GlobalTitle title={"Познай Лавину"} />
        {column2Items.map((item) => (
          <div key={item.id}>
            <ServiceItem
              id={item.id}
              src={item.src}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
      </Col>
    </div>
  );
}

export default MainServicesList;
