import React from "react";
import { Row, Col } from "react-bootstrap";

import FooterLogo from "./ui/FooterLogo/FooterLogo";
import CopyRight from "./ui/CopyRight/CopyRight";

import FooterCol from "./ui/FooterCol/FooterCol";

import route from "./consts/routes";

import { footerwrapper,logo } from "./index.module.css";

function index() {
  return (
    <Row className={footerwrapper}>
      <Col xs={3} className={logo}>
        <FooterLogo />
      </Col>
      <Col xs={8}>
        <Row>
          <FooterCol
            link={route.serviceList}
            text={"О нас"}
            items={route.info}
          />
          <FooterCol
            link={route.infoList}
            text={"Услуги"}
            items={route.service}
          />
          <FooterCol
            link={route.review}
            text={"Репутация"}
            items={route.review}
          />
          <FooterCol text={"Соцсети"} items={route.social} />
        </Row>
        <Row>
          <Col xs={8}>
            <CopyRight />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default index;
