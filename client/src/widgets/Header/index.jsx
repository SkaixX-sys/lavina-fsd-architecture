import React, { useContext } from "react";
import HeaderLink from "./ui/HeaderLink/Headerlink";
import HeaderLogo from "./ui/HeaderLogo/HeaderLogo";
import SignInButton from "./ui/SignInButton/SignInButton";
import { header, logo, navbar, authButtons } from "./index.module.css";
import { Col, Row } from "react-bootstrap";
import route from "./utils/routes";
import { Context } from "../../app/main";
import { observer } from "mobx-react-lite";
const Index = observer(() => {
  const { user } = useContext(Context) ?? {};
  const isAuth = user?.isAuth ?? false;

  const logout = () => {
    localStorage.removeItem("token");
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Row className={`${header} mt-3 mb-2`}>
      <Col xs={2} className={logo}>
        <HeaderLogo link={route.main} />
      </Col>
      <Col xs={4} className={navbar}>
        {route.nav.map(({ link, text }) => (
          <div key={link}>
            <HeaderLink link={link} text={text} />
          </div>
        ))}
      </Col>
      {isAuth ? (
        <Col xs={2} className={authButtons}>
          <HeaderLink link={route.admin} text={"Админ"} />
          <div onClick={() => logout()}>
            <HeaderLink text={"Выход"} />
          </div>
        </Col>
      ) : (
        <Col xs={2} className={authButtons}>
          <SignInButton link={route.login} text={"Вход"} />
          <HeaderLink link={route.registration} text={"Регистрация"} />
        </Col>
      )}
    </Row>
  );
});

export default Index;
