import React from 'react'
import { NavLink } from 'react-router-dom'
import {logoIcon, footerLogo} from './FooterLogo.module.css'

function FooterLogo({link}) {
  return (
    <NavLink to={link} className={footerLogo}><img src='src/widgets/Footer/ui/FooterLogo/icon/logo.png' className={logoIcon} />ЛАВИНА</NavLink>
  )
}

export default FooterLogo