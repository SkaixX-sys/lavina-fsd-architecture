import React from "react";
import { siginInButton } from "./SignInButton.module.css";
import { NavLink } from "react-router-dom";

function SignInButton({ link, text }) {
  return (
    <NavLink to={link} className={siginInButton}>
      {text}
    </NavLink>
  );
}

export default SignInButton;
