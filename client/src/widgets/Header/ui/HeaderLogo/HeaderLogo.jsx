import React from 'react'
import {headerLogo} from './HeaderLogo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = ({link}) => {
  return (
    <NavLink to={link} className={headerLogo}>ЛАВИНА</NavLink>
  )
}

export default Logo