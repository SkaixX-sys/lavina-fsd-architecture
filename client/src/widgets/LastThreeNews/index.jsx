import React from "react";
import GlobalTitle from "./../../shared/ui/GlobalTitle/GlobalTitle";
import { Col, Row } from "react-bootstrap";
import { itemWrapper, newsWrapperTitle } from "./index.module.css";
import LastThreeNewsList from "./service/LastThreNewsList/LastThreeNewsList";

function index() {
  return (
    <div className={itemWrapper}>
      <Col xs={1}></Col>
      <Col xs={10}>
        <Row className={newsWrapperTitle}>
          <GlobalTitle title={["Что", <br key={"br"} />, "нового?"]} />
        </Row>
        <Row>
          <LastThreeNewsList />
        </Row>
      </Col>
      <Col xs={1}></Col>
    </div>
  );
}

export default index;
