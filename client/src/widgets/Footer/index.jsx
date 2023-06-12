import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import FooterLogo from "./ui/FooterLogo/FooterLogo";
import CopyRight from "./ui/CopyRight/CopyRight";

import FooterCol from "./ui/FooterCol/FooterCol";

import route from "./utils/routes";

import { footerwrapper,logo } from "./index.module.css";

function index() {
  return (
    <div className={footerwrapper}>
      <Col xs={3} className={logo}>
        <FooterLogo link={route.main} />
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
    </div>
  );
}

export default index;
