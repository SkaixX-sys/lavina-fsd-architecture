import React from 'react'
import {newsMainTitle} from './NewsMainTitle.module.css'

function NewsMainTitle({title}) {
  return (
    <div className={newsMainTitle}>{title}</div>
  )
}

export default NewsMainTitle