import React, { useContext, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import route from "./utils/routeconsts";
import { registration, signIn } from "./api/authApi/authApi";
import { observer } from "mobx-react-lite";
import { Context } from "./../../app/main";
const AuthForm = observer(() => {
  const { user } = useContext(Context) ?? {};
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === route.loginPage;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await signIn(login, password);
      } else {
        data = await registration(login, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(route.mainPage);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto color-black pb-2">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3 "
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-between align-items-center mt-3">
            {isLogin ? (
              <div className="color-black">
                Нет аккаунта?{" "}
                <NavLink to={route.registrationPage}>
                  Зарегестрируйтесь!
                </NavLink>
              </div>
            ) : (
              <div className="color-black">
                Есть аккаунт?{" "}
                <NavLink to={route.loginPage}>Авторизируйтесь!</NavLink>
              </div>
            )}
            <div onClick={click} className="btn btn-outline-warning">
              {isLogin ? "Войти" : "Регистрация"}
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default AuthForm;
