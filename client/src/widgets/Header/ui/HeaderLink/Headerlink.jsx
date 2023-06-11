import React from 'react'
import {headerlink} from './Headerlink.module.css'
import {NavLink} from 'react-router-dom'

function Headerlink({link, text}) {
  return (
    <NavLink to={link} className={headerlink}>{text}</NavLink>
  )
}

export default Headerlink