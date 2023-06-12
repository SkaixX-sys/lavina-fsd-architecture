import React from "react";
import GlobalTitle from "./../../shared/ui/GlobalTitle/GlobalTitle";
import Description from "./../../shared/ui/Description/Description";
import Globallink from "./../../shared/ui/GlobalLink/Globallink";
import { Col, Row } from "react-bootstrap";
import { SERVICES_LIST_ROUTER as serviceList } from "./utils/routerconsts";
import { skiwrapper, title, description, imageWrapper } from "./index.module.css";
function index() {
  return (
    <Row className={skiwrapper}>
      <Col xs={1}></Col>
      <Col xs={4}>
        <div className={title}>
          <GlobalTitle title={"Катайся как Хочешь, на Наших Склонах"} />
        </div>
        <div className={description}>
          <Description
            text={
              "Наши подъемники смогут доставить вас практически на любую высоту."
            }
          />
        </div>
        <div>
          <Globallink text={"Начать Летать"} link={serviceList} />
        </div>
      </Col>
      <Col xs={7} className={imageWrapper}>
        <img
          src="./src/widgets/SkiLikeYouWant/assets/images/fly.png"
          alt=""
          width="100%"
        />
      </Col>
    </Row>
  );
}

export default index;
