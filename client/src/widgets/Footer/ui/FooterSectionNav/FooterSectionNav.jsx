import React from 'react'
import {footersectionnav} from './FooterSectionNav.module.css'
import { NavLink } from 'react-router-dom'

function FooterSectionNav({link,text}) {
  return (
    <NavLink to={link} className={footersectionnav}>{text}</NavLink>
  )
}

export default FooterSectionNav