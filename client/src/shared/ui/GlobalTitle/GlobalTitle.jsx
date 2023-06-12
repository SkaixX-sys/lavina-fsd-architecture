import React from 'react'
import {globalTitle} from './GlobalTitle.module.css'

function GlobalTitle({title}) {
  return (
    <div className={globalTitle}>{title}</div>
  )
}

export default GlobalTitle