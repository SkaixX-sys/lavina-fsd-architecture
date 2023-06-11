import React from 'react'
import {footernav} from './FooterNav.module.css'
import { NavLink } from 'react-router-dom'

function FooterNav({link,text}) {
  return (
    <NavLink to={link} className={footernav}>{text}</NavLink>
  )
}

export default FooterNav