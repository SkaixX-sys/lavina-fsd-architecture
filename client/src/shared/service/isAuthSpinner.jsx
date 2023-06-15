import React, { useEffect, useState, useContext } from "react";
import { check } from "../api/checkAuth";
import { Container, Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "./../../app/main";

const IsAuthSpinner = observer(() => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context) ?? {};

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow"/>
      </Container>
    );
  }

  return null;
})

export default IsAuthSpinner;
