import React from "react";
import HeaderLink from "./ui/HeaderLink/Headerlink";
import HeaderLogo from "./ui/HeaderLogo/HeaderLogo";
import SignInButton from "./ui/SignInButton/SignInButton";
import { header, logo, navbar, authButtons } from "./index.module.css";
import { Col, Row } from "react-bootstrap";
import route from './consts/routes'
function Index() {
  return (
    <Row className={`${header} mt-3 mb-2`}>
      <Col xs={2} className={logo}>
        <HeaderLogo to={route.main}/>
      </Col>
      <Col xs={4} className={navbar}>
        {route.nav.map(({ link, text }) => (
          <div key={link}>
            <HeaderLink link={link} text={text} />
          </div>
        ))}
      </Col>
      <Col xs={2} className={authButtons}>
        <SignInButton link={route.login} text={"Вход"} />
        <HeaderLink link={route.registration} text={"Регистрация"} />
      </Col>
    </Row>
  );
}

export default Index;
